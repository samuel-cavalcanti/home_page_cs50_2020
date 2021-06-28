#! /bin/python3

import sys
import os


def to_camel_case(string: str) -> str:
    camel_case_sub_strings = [sub_string[0].upper() + sub_string[1:] for sub_string in string.split('-')]

    return ''.join(camel_case_sub_strings)


def make_dir(path: str):
    if os.path.isdir(path):
        return

    os.mkdir(path)


def make_file(path: str, name_file: str, content: str):
    open(os.path.join(path, name_file), 'w').write(content)


def java_script_default_class(class_name: str, web_component_name: str) -> str:
    default_class = """class 1 extends HTMLElement {
    
    connectedCallback() {

        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "2/2.html", false);
        httpRequest.send();
        this.attachShadow({ mode: 'open' }).innerHTML = httpRequest.responseText;


    }

}

customElements.define('2', 1);
    """
    java_script_class = default_class.replace('1', class_name, 2)
    java_script_class = java_script_class.replace('2', web_component_name, 3)

    return java_script_class


def default_html_file(bootstrap: bool) -> str:
    bootstrap_link = """<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">"""
    default_html = """
<!DOCTYPE html>

<html lang="en">

<head>
    <title>title</title>
    {}
</head>

<body>


</body>

</html>
    """

    if bootstrap:
        html_file = default_html.format(bootstrap_link)
    else:
        html_file = default_html.format("")

    return html_file


def main(args: list):
    web_component_name: str = args[1]
    if len(args) > 2:
        get_bootstrap = args[2].lower() == 'true'
    else:
        get_bootstrap = False

    html_file = default_html_file(get_bootstrap)

    html_file_name = web_component_name + ".html"

    camel_case_name = to_camel_case(web_component_name)
    java_script_file = java_script_default_class(camel_case_name, web_component_name)
    java_script_file_name = camel_case_name + ".js"

    make_dir(web_component_name)

    make_file(web_component_name, html_file_name, html_file)
    make_file(web_component_name, java_script_file_name, java_script_file)


if __name__ == '__main__':
    main(sys.argv)
