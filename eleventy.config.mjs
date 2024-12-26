export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory('src')

	eleventyConfig.addPassthroughCopy({
		"static/js": "js",
		"static/css": "css",
		"static/img": "img",
	})
}
