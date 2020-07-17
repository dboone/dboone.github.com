import json
import os

def get_post_filename(date, title, extension=".md"):
    return date + "-" + title + extension

def create_post(posts_path, images_path, post_configuration):
    date = post_configuration["date"]
    title = post_configuration["title"]
    hyphenated_title = title.replace(' ', '-')
    post_filename = get_post_filename(date, str(hyphenated_title))

    title_line = "---"
    newline = "\n"

    with open(posts_path + "/" + post_filename, "w+") as post_file:
        post_file.write(title_line + newline)
        post_file.write("layout: post" + newline)
        post_file.write("title: \"" + post_configuration["title"] + "\""+ newline)
        post_file.write("date: " + post_configuration["date"] + newline)
        post_file.write("categories: ")
        for category in post_configuration["categories"]:
            post_file.write(category + " ")
        post_file.write(newline)
        if len(post_configuration["images"]) > 0:
            post_file.write("featured-img: \"" + post_configuration["images"][0] + "\"" + newline)
        post_file.write(title_line + newline + newline)
        post_file.write(post_configuration["description"] + newline + newline)
        for image in post_configuration["images"]:
            post_file.write("![" + image + "](" + images_path + image + ".jpg){:class=\"img-responsive\"}" + newline + newline)

    print ("Created \'%s\'" % post_filename)

def parse_configuration(config_filename):
    configuration = []
    with open(config_filename, "r") as config_file:
        configuration = json.load(config_file)
    
    posts_path = configuration["posts_path"]
    images_path = configuration["images_path"]

    print ("Read configuration for \'%s\'" % configuration["site_title"])
    print ("Creating posts in directory \'%s\'" % posts_path)

    if not os.path.exists(posts_path):
        os.makedirs(posts_path)

    for post in configuration["posts"]:
        create_post(posts_path, images_path, post)

def main():
    config_filename = ".\site-master.json"

    parse_configuration(config_filename)

if __name__ == "__main__":
    main()