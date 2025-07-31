# DESI Website template

![DESI Logo](assets/img/logos/logo_dark.png)

This is an essay on a template designed for DESI websites, built with [Jekyll](https://jekyllrb.com/) and [Bulma](https://bulma.io/). It provides a clean and modern design, with a focus on maintainability and ease of use. The template is fully responsive and works well on both desktop and mobile devices.

> Feel free to use this template as a starting point for your own website. The elements and structure are designed to be easily customizable, so you can adapt it to your needs. The template is open source and licensed under the [MIT License](https://opensource.org/license/mit/).

## Configuration
The configuration file is located at `_config.yml`. It contains the following sections:
1. The title and description of the website. The title is used in the page names.
2. The navigation bar and footer configuration.
   - `navbar_title`: The title displayed in the navigation bar
   - `show_language_switcher`: If set to `true`, a language switcher will be displayed in the navigation bar
   - `language_switcher_list`: If set to `true`, the language switcher will display a menu of available languages, and displays a modal card otherwise
   - `show_theme_switcher`: If set to `true`, a theme switcher will be displayed in the navigation bar
   - `footer`: The footer text displayed next to the footer icon
   - `license`: The link to the license used in the license icon href
3. The css theme to use by default (either `light` or `dark`).
4. The base URL of the website. This is used to generate absolute URLs for links and assets.
5. Some useful links
6. The pagination and collections setup. See [Jekyll](https://jekyllrb.com/docs/) [Jekyll Paginate V2](https://github.com/sverrirs/jekyll-paginate-v2) and [Jekyll Archives V2](https://github.com/george-gca/jekyll-archives-v2) for more information on how to use these features.
   - Some information on how to set up new collections can be found in the [Collections](#collections) section.

### CSS setup
The template uses [Bulma](https://bulma.io/) for styling. The CSS files are located in the `assets/css` directory. The main CSS file is `bulma_custom.css`, which contains custom styles for the template. You can modify this file to change the appearance of the website.

To allow theme switching, the template uses a custom CSS file `theme.css` that is dynamically loaded based on the selected theme. This file includes two CSS classes: `only-on-light` and `only-on-dark`, which allow some elements to be displayed only on the light or dark theme, respectively. (This is mostly used for the images, which can be different for light and dark themes.)

## Architecture
The architecture of the website follows usual HTML conventions. Main pages are located in the root directory, while folders are used to organize content. In this template, only root pages are used, but you can create subfolders to organize your content as needed.

> Note that the template creates some subfolders at compilation, for blog posts and collections.
### Pages
The available pages in the template are:
- `index.html`: The homepage of the website, which includes a welcome hero section and a collection carousel
- `404.html`: The page displayed when a requested page is not found
- `blog.html`: The blog page, which displays a paginated collection of posts
- `contact.html`: The contact page, which includes a contact form
- `credits.html`: The credits page, which currently lists the frameworks used
- `faq.html`: The FAQ page, which displays a collection of frequently asked questions (compiled from the `faq` collection)
- `partners.html`: The partners page, which displays a collection of partners (compiled from the `partners` collection)
- `terms.html`: The terms page, which displays a collection of static content (compiled from the `static` collection)
- `team.html`: The team page, which displays a collection of active team members (compiled from the `team` collection)
- `legacy.html`: The legacy page, which displays a collection of legacy team members (compiled from the `team` collection)

Some pages are created at compilation time, such as:
- `blog/<post>.html`: The individual blog post pages, which are generated from the `posts` collection
- `blog/<year>/<month>/<day>/<post>.html`: The individual blog post pages and architecture, which are generated from the `posts` collection
- `blog/<tag>/index.html`: The blog archive pages, which are generated from the `posts` collection (same as date-based archives)

### Assets
The assets directory contains all the files that are not HTML pages but are used by the template. This includes CSS files, JavaScript files, images, and language files. 
It contains the following subdirectories:
- `css`: Contains the CSS files used by the template, including a `bulma_custom.css` file and the `theme.css` file for theme switching.
  - The size of the main logo and navbar can be set in `assets/css/bulma_custom.css`
  - If providing a light and dark version of an image, use the `only-on-light` and `only-on-dark` classes in the HTML to display the correct image based on the selected theme.
- `img`: Contains the images used by the template, including the hero background image and the logo images.
  - The main logo and footer logo, as well as the copyright logo, are located in `assets/img/logos/` with a light and dark version when needed
- `js`: Contains the JavaScript files used by the template, each one for a specific use and included in the `head.html` file.
- `lang`: Contains the language files used to translate static elements (see [Languages & Translations](#languages--translations) for more information).

## Layouts
This template uses Jekyll's layout system to define the structure of the pages. The layouts are located in the `_layouts` directory. The following layouts are available:
- `default`: The default layout used for most pages. It includes the navigation bar, footer, and main content area.
- `markdown`: A layout specifically designed for pages that use Markdown content. It inherits from the `default` layout and includes additional styles for Markdown rendering.
- `archive`: A layout used for archive pages, such as blog archives. It includes a list of the posts in the archive.
> Unfortunately, the pagination system created by jekyll-paginate-v2 is not compatible with the archive pages created by jekyll-archives-v2, so pagination is not available on archive pages.
- `partner`, `post`, `team`: Layouts used for individual partner, post, and team member pages respectively.


## Elements
Several elements can be included in each page, with the following parameters:
- Navigation bar
  - See [Data files](#data-files)
- Footer
  - See [Data files](#data-files)
- Hero section
  - `title`: The main title of the hero section
  - `subtitle`: The subtitle of the hero section
  - `hero_size`: Determines the size of the hero section (e.g., `is-small`, `is-medium`, `is-large`)
  - `hero_image`: The URL of the hero background image. Defaults to `assets/img/hero_bg.png`
  - `darken`: Percentage of darkening the hero background image (e.g., `0.5` for 50% darkening)
  - `blur`: Amount of blur to apply to the hero background image (e.g., `5px` for 5 pixels)
  - `page_number`: If displayed on a paginated page, to keep the active effect on the active tab
- Breadcrumbs: Displays the current page's location in the website hierarchy.
  - `size`: Determines the size of the element (e.g., `is-small`, `is-medium`, `is-large`)
  - `is_md`: Determines if the element is used in the markdown template (to fix a display issue)
  - `back`: Includes a back button
  - `home`: Includes a home button
  - `breadcrumbs`: Includes breadcrumbs navigation
- Pagination: Used to navigate through paginated content.
  - `size`: Determines the size of the pagination element (e.g., `is-small`, `is-medium`, `is-large`)
  - `hide_1`: Hides the pagination if only one page is available
  - `display_number`: The number of pages to display in the pagination element. Defaults to `5`
- Collection carousel
  - `title`: The title of the carousel
  - `posts`: The collection of posts to display in the carousel (e.g. `site.posts`)
  - `post_nb`: The number of posts to display in the carousel. Defaults to `5`
  - `permalink`: The permalink to the collection page
  - `sort`: The sorting method for the posts (e.g., `date`, `title`, `random`). Defaults to `date`
  - `reverse`: If set to `true`, sorts the posts in reverse order. Defaults to `false`
- Language selector: Displays a dropdown menu to redirect the user to the appropriate language version of the page.
  - `icon`: The Font Awesome icon to display in the language selector
  - `button_class`: The button CSS classes (defaults to `button`)
  - `button_text`: The text to display in the button (defaults to "Filter")
  - `button_i18n`: The text to display in the button when the language is selected (defaults to "Filter")
  - `page_number`, `to_remove`, `date`: Used to keep the active effect on the active tab by removing those elements from the URL before appending the language code

## Data files
Data files are located in the `_data` directory. They are used to populate various elements of the website. The following data files are available:

- Navigation bar links are read from `navbar_links.yml`, each with a `name` and `url`
  - If provided with a `dropdown` key, it will create a dropdown menu with the specified pages (`name` and `url`)
  - If called with a `page_number` element, it will keep the active effect on the active tab
- Navigation bar buttons are read from `navbar_buttons.yml` with a `name`, `url`, and `color`. 
  - The `color` must be a [Bulma color class](https://bulma.io/documentation/helpers/palette-helpers/)
- Footer navigation links are read from `footer_links.yml`, each with a `name` and `url`
- Social media links are read from `social.yml`, each with a `name`, `url`, and `icon`
  - The `icon` must be a [Font Awesome Brand class](https://fontawesome.com/icons/packs/brands)
- Welcome Hero tabs are read from `home_tabs.yml`, each with a `name`, `url`, and `icon`
  - The `icon` must be a [Font Awesome element](https://fontawesome.com/icons/) (including the pack class name)
- See [Translations](#languages--translations) for `lang.yml`

## Collections
This template uses Jekyll's collections feature to organize content into different categories.

### Existing collections

#### FAQ
This collection is used to display frequently asked questions on the FAQ page. It is located in `_faq` and contains individual question files with the following front matter:
```yaml
---
tag: "faq_x" # The tag used to identify the question translation
question: "Question Title"
---
Question content goes here.
```

#### Partners
This collection is used to display partners on the Partners page. It is located in `_partners` and contains individual partner files with the following front matter:
```yaml
---
name: "Partner Name" # The name of the partner in the current language
excerpt: "This is the excerpt for Partner Name." # The excerpt displayed on the partners page
location: "Location" # The location of the partner
contact: "email" # The contact information of the partner --> Prefer an email, as the template will link a mailto: link there
lang: "en" # The language of the partner page (used to display the correct language flag)
---
Partner description goes here.
```

#### Posts
This collection is used to display blog posts on the Blog page. It is located in `_posts` and contains individual post files with the following front matter:
```yaml
---
title: "Post Title" # The title of the post
author: "Author Name" # The author of the post
excerpt: "This is the excerpt for Post Title." # The excerpt displayed on the blog page (optional)
date: 2023-10-01 # The date of the post (optional, should be in the name of the file)
lang: "en" # The language of the post (used to display the correct language flag)
categories: ["en", "tag2"] # The categories associated with the post. One of the categories must be the language of the post (e.g., "en", "fr", "es")
---
Post content goes here.
```

> Categories are used to generate the blog archive pages, so they should be used to categorize posts. The `lang` label is used to display the correct language flag in the blog page.

#### Static
See [Translations](#languages--translations) for more information on how this collection is used to translate large sections of static content.

#### Team
This collection is used to display team members on the Team page. It is located in `_team` and contains individual member files with the following front matter:
```yaml
---
surname: "Member Surname" 
name: "Member Name" 
image: "assets/img/team/member_image.png" # The path to the member's image (square png if possible)
email: "member@example.com"
location: "Location" # The location of the team member
social: # The social media links of the team member
  - name: "globe" # The name of the social media link
    icon: "fas fa-globe" # The Font Awesome icon class for the social media link
    url: "https://example.com" # The URL of the social media link
tags: ["active", "legacy"] # The tags associated with the team member (e.g., "active", "legacy", etc.)
---
Member description goes here. If only one paragraph, will be displayed on the team page. If more than one paragraph, only the first paragraph will be displayed on the team page and the link to the member page will be added in the teams page.
```

### Creating a new collection
To create a new post-type collection, follow these steps:

1. Create a new folder in the root directory with the name of the collection (e.g., `_news`).
2. Create a new section in the `_config.yml` file to define the collection:
```yaml
collections:
  news:
    output: true # Set to true if you want to generate pages for this collection
    permalink: :collection/:year/:month/:day/:title/ # The permalink structure for the collection pages
```
3. Create a new template file in the `_layouts` directory for the collection (e.g., `news.html`). Then, add the layout to the collection files in `_config.yml`:
```yaml
defaults:
  - scope:
      path: ""
      type: "news"
    values:
      layout: "news"
```
4. [Optional] If you want to create archive pages for the collection (e.g., by date or by tag), you can use the `jekyll-archives-v2` plugin. Add the following configuration to `_config.yml`:
```yaml
jekyll-archives:
  news:
    enabled:
      - year
      - month
      - day
      - categories
    layout: archive # Use the archive layout for the archive pages
    permalinks:
      year: :collection/:year/
      month: :collection/:year/:month/
      day: :collection/:year/:month/:day/
      category: :collection/:name/
```
5. Create a new page to list the collection items (e.g., `news.html`). Use the following front matter:
```yaml
---
layout: default
title: News
permalink: news/
pagination: 
    enabled: true
    collection: news
---
```
Then, you can use the following code to display the collection items:
```
{% include paginator_posts.html %}
```
And the following code to display the pagination:
```liquid
{% include pagination.html display_number=5 size="small" %}
```

## Languages & Translations
The data in the website is translated in 2 different ways :
- For small static elements, the translation is done using the `data-i18n` attribute in the HTML markup. A javascript function will then replace the HTML content with the translation from the associated keys in the `assets/lang/` JSON files.
  - This function allows nested keys, separated by slashes, such as `home_tabs/tab1/title` to access the `title` key of the `tab1` object in the `home_tabs` object in the language file.
  - If a translation key is not found in the language file, the English version (HTML-encoded) will be used as a fallback.
  - The design tries to avoid html in the json file. It works but is not really readable.

- For larger sections of static content, the translation is done using the `_static` collection. Each file in this collection contains the content in a specific language, and the template will display the content based on the selected language.
  - The files are named with the language code as a suffix (e.g. `terms_en.md` etc.)
  - The content of the file can be written in Markdown or HTML
  - The front matter of the file contains the name of the translated section (that should be unique) under the `name` key, and the language code under the `lang` key.
  - To include the content of a static file in a page, use the following Liquid include:
    ```liquid
    {% include static_translations.html name="name key content" %}
    ```
  - The function will add all available translations (or english if no translation is available) to the page, and will only display the content in the selected language.

> English is always the fallback of the translations, so if a translation is not available in the selected language, the English version will be displayed instead.
> The english content is encoded in the HTML files in the first case, and should always be provided in the _static collection files in the second case.

For techincal reasons, the posts and collection pages *cannot* be translated and have instead a flag displayed to indicate the language of the content. 

### Adding a new language
To add a new language to the website, follow these steps:

1. Create a new JSON file in the `assets/lang/` directory for the new language (e.g., `fr.json` for French).
2. Add the translations for the new language in the JSON file, following the same structure as the existing language files.
3. Update the `lang.yml` file in the `_data` directory to include the new language. Add a new entry with the language name and code:
```yaml
- name: "Deutsch" 
  code: "de"
```
4. Add a flag (from the [Twemoji cheatsheet website](https://twemoji-cheatsheet.vercel.app/)) to represent the new language in `assets/img/lang/`. This has to be a PNG file with the same name as the language code (e.g., `de.png` for German).
5. [Optional] If you want to add translations for the static content, create a new file in the `_static` collection with the language code as a suffix (e.g., `terms_de.md` for the German translation of the terms page) for each file you want to translate. The front matter should include the `name` and `lang` keys as described above.

> Tip : You can inspect all pages with the web console open, a warning will be displayed in the console if a translation is missing for a static element. This will help you identify any missing translations in the JSON file.

## Host on GitHub Pages
The template contains a working GitHub Actions workflow to build and deploy the site to GitHub Pages.
This workflow is located in `.github/workflows/jekyll.yml` and will automatically build the site and deploy it to the `gh-pages` branch when changes are pushed to the `main` branch.

If pushing to a repository instead of a root website, you will need to set the `baseurl` in `_config.yml` to the name of the repository (e.g., `/desi_template`). Do not add the trailing slash, it will be added in the head of the pages automatically.

> Github pages seems to remove the trailing slash from `site.baseurl` so I fixed it that way