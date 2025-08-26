# Magic template
This template is a small static website template for magicians. It includes a shop page, contact infos, customer reviews and tour info.

This template is built with [Jekyll](https://jekyllrb.com/), with [Bulma](https://bulma.io/) as the CSS framework.

> Note : No backend is implemented in this template (see [Shop](#shop) or [Tour](#tour))

## Collections
Several elements can be easily added to the website using collections. Here are some examples:

- **Products**: Add products to the shop by creating markdown files in the `_products` directory.
- **Reviews**: Collect customer reviews in the `_reviews` directory.
- **Tour Dates**: Manage tour dates and locations in the `_tour` directory.

### Shop
To add a product to the shop, create a new markdown file in the `_products` directory with the following front matter:

```yaml
---
author: "Author Name"
price: 19.99 €
images: 
  - url: "path/to/image1.jpg"
    alt: "Description of image 1"
  - url: "path/to/image2.jpg"
videos:
  - url: "path/to/video1.mp4"
    alt: "Description of video 1"
  - url: "path/to/video2.mp4"
link: "https://example.com/product-link" # Can be set to "direct" if the product is sold directly
preorder: true # Set only if the product is available for pre-order
out-of-stock: false # Set only if the product is out of stock
hide: false # Set only if the product should be hidden from the shop
categories: [tags]
reviews:
  - author: "Reviewer Name"
    rating: 5 # Rating out of 5
    text: "Review text"
---
Product description goes here.
```

The file name should follow the format `DATE-product-name.md`. Otherwise, add a `title` field in the front matter.

> Note : No backend is implemented to sell the products, handle payments or product management.
> The link should point to an external product page or a relevant URL.
> The direct sale option will open a dialog window that will redirect the user to the contact page.

### Tour
To add a tour date, create a new markdown file in the `_tour` directory with the following front matter:

```yaml
---
department: 75 # Department number, if relevant
country: "Country Name" # Country name, if relevant
venue: "Venue Name"
address: | # The pipe allows multiline strings in YAML
    Venue address,
    Can be multiline
type: "magic" # Type of the event
link: "https://example.com/tour-link" # Can also be set to "soon" or "full"
---
Tour description goes here.
```

The file name should follow the format `DATE-city.md`. Otherwise, add a `date` field and a `title` field in the front matter.

If a field is not provided, it will not be displayed. Also, any past event will not be displayed (though they are only removed at website compilation !!)

> Note : No backend is implemented to manage the tour dates or ticket sales.
> The link should point to an external page with more information about the tour.


### Reviews
To add a review to the main website review carrousel, add a new markdown file in the `_reviews` directory with the following front matter:

```yaml
---
author: "Reviewer Name"
rating: 5 # Rating out of 5
type: "Prestation type"
---
The review goes here.
```

The file name should follow the format `DATE-author-name.md`. 


## Data files
There are several data files in the template that can be used to manage content more easily:

- **brands.yml**: Define different brands and their attributes.
- **gallery.yml**: Manage images and their descriptions in the website gallery.
- **prestations.yml**: Define different prestations (services) offered by the magician.
- **social.yml**: Manage social media links.
- **stats.yml**: Display several statistics.

### Brands
To display brands in the infinite slider of the main page, add the following section in the `brands.yml` file:

```yaml
- name: "Brand Name"
  logo: "path/to/logo.jpg" # Path or link
  link: "https://example.com/brand-link"
```

### Statistics
To add a statistic to the related section in the main page, add the following section in the `stats.yml` file:

```yaml
- name: "Statistic name"
  value: "Statistic Value"
  icon: "Font-Awesome icon class" # see https://fontawesome.com/icons NEEDS TO BE FROM THE SOLID SUBCLASS !
```

### Prestations
To display prestations (services) offered by the magician, add the following section in the `prestations.yml` file:

```yaml
- title: "Prestations Name"
  icon: "Font-Awesome icon class" # see https://fontawesome.com/icons
  description: "Description of the prestation"
```

### Gallery
To display images in the website gallery, add the following section in the `gallery.yml` file:

```yaml
- image: "path/to/image.jpg" # Path or link
  caption: "Caption of image"
  credit: "Name of the photographer or source"
```

> Note : Only the first 20 pictures will be displayed in the gallery.

### Social network links
To add a social network, add the following section in the `social.yml` file:

```yaml
- name: "Social Network Name"
  url: "https://example.com/social-link"
  icon: "Font-Awesome icon class" # see https://fontawesome.com/icons NEEDS TO BE FROM THE BRAND SUBCLASS !
  magic: true # This will also display the social link in the contact section of the main page
```

> If `magic` is set to true, the social link will also be displayed in the contact section of the main page.
> All social links will be displayed in the page footer.


## Translations
The website includes a translation feature to support multiple languages.
To add a language, add the following in the `lang.yml` file:

```yaml
- code: "en"
  name: "English"
```

Then, you can add the translations in `assets/lang/en.json` file, following the structure of the other translation files.
The keys are set in the HTML code, and if you need to add a new key, make sure to also add it in the translation files.

> Tip : If you want to check which sections are not translated, the console will show the translation keys that were not found at page load.
