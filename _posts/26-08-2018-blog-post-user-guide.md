---
layout: blog-post
author: mk
title: Writing a blog post — user's guide
hero: studio-3.jpg
tags: Sgraffito Tag Examples
published: true
excerpt_separator: <!--more-->
---

This is an example blog post in which you can see how things in the blog work and how to write in markdown. You can also reuse selected syntax elements in your own blog posts.

Markdown is a simple notation system used for formatting text. To format text, all you need to do is use some extra characters in specific locations.

<!--more-->

All paragraph text in your blog posts is set by default in Open Sans, weight 300.


# Headings

There are two levels of headings that can be used:

`# Heading level 1`

`### Heading level 3`

Both headings are set in Playfair Display, weight 700. You can turn any line of text into a heading by adding respectively one or three hashtags in front of that line.


# Typography

There are several ways to format text within a line:

- For *italics*, put selected words between single asterisks `*`

- For **bold**, put selected words between double asterisks `**`

- For **bold _italics_**, use asterisks and underscores

- For ~~strike-through~~, use double tildes `~~`

Examples: `*italics*`, `**bold**` and `~~strike-through~~`

Four points above are also an example of a list. It can be easily formatted by starting each list element with a dash.

`- List point 1`

`- List point 2`

`- List point ...`

If you need a numbered list, use numbers instead of dashes.

`1. Number one`

`2. Number two`

will result in:

1. Number one

2. Number two

and so on...


# Links

Links can also be specified from the level of markdown formatting. To create a link from a line of text, use a combination of square and round brackets like this:

`[Link to this blog post](/blog/2018/08/26/test-blog-post-1/)`

The above code creates a link like this: [Link to this blog post](/blog/2018/08/26/test-blog-post-1/)


# Images

Embedding images in the a blog post works in a similar way to embedding links. The difference is that before the square brackets you need to add an exclamation mark (`!`) to indicate that the source of the associated URL needs to be embedded. Here is an example:

`![Embedded image](/img/studio-4.jpg/)`

The above code will embed this image:

![Embedded image](/img/studio-4.jpg/)


# Excerpt separator

You can decide how much text from this blog post will be displayed in the [main blog post webpage](/blog). For this purpose, use the excerpt separator:

`<!--more-->`

All content above the separator will be shown as the blog post excerpt in the main blog webpage. All content below the separator will be displayed only after displaying the full blog post in the single blog post URL.

In this case, only two first paragraphs are shown in the main blog webpage. If you want to include an image in the main blog webpage, you will need to include it above the excerpt separator.

If you don't include the separator anywhere in the markdown document, the entire blog post will be displayed in the main blog webpage.


# Blog post URL

Each individual blog post has a unique URL that can be used to link to this blog post across the Internet. The URL includes a segment which will be formatted from the name of this markdown document. For example, the date and the blog post title included in this document's name

`26-08-2018-blog-post-user-guide.md`

will be included in the final path of the URL:

`http://trowelandlime.com/blog/2018/08/26/blog-post-user-guide/`


# Drafts

You can work on drafting blog posts and — when the moment is right — decide to publish them. To make sure that a blog post is included in your blog (and visible to readers), check the status of the `published` parameter in the very top of the markdown document. If the status is `published: true`, the blog post will be included in the blog and visible to readers. If the status is `published: false`, the blog post will not be included in your blog and won't be accessible via the URL.


# Tags

You can tag your blog posts. This one, for example, is tagged with three tags:

`Sgraffito`, `Tag` and  `Examples`

You will notice that one of those tags is not working — the URL to which the `Tag` tags link does not exist. This is because for every tag that you use across your entire blog, you need to manually create a tag webpage. Those tag webpages will aggregate all blog posts that are tagged with a given tag. For example, of you click the `Sgraffito` tag in the top title part of this blog post, you will be directed to the `/tag/Sgraffito/` URL path.

That's why you need to be thoughtful about how you tag your blog posts. Make sure all the tags make sense, that they are distinct enough, and that they are not duplicated; for example tags `Example`, `example`, and `Examples` should probably be combined into a single tag that will link to all related posts.

In order to introduce a new tag, you need to create a new markdown document in your [tag directory](/tag). For example, if you were to add a new `Tag` tag, you would need to duplicate the `sgraffito.md` file and modify two parameters in its front matter:

1. Change `title: "Sgraffiyo Tags"` to `title: "Tag Tags"`

2. Change `tag: Sgraffio` to `tag: Tag`

Rename the new document to `tag.md` and save it. It should now appear as a new [Tag tags page](/tag/Tags).


# Publishing

Remember that in order to publish a new blog post publicly on the Internet, it must be:

1. Compiled by Jekyll with `jekyll build` or `jekyll serve --watch`

2. Pushed to master in the GitHub [sgraffito_v1 repository](https://github.com/marek-kultys/sgraffito_v1)

3. The contents of the `_site` folder in the repository master branch must be uploaded to the host server on [klatka.pl](https://klatka.pl/)

4. Verify the changes on the [Trowel & Lime website](http://trowelandlime.com)


