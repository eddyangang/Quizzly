const cheerio = require("cheerio");
const axios = require("axios")


async function quizletScrap(url) {
    return axios.get(url).then(function (response) {
        // Load the Response into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        var $ = cheerio.load(response.data);
        // An empty array to save the data that we'll scrape
        var results = [];

        // With cheerio, find each p-tag with the "title" class
        // (i: iterator. element: the current element)
        $("div.SetPageTerms-term").each(function (i, element) {

            // Save the text of the element in a "title" variable
            var word = $(element).find("a.SetPageTerm-wordText>span").text();

            // In the currently selected element, look at its child elements (i.e., its a-tags),
            // then save the values for any "href" attributes that the child elements may have
            var definition = $(element).find("a.SetPageTerm-definitionText>span").text()

            // Save these results in an object that we'll push into the results array we defined earlier
            results.push({
                word,
                definition
            });
        });

        // Log the results once you've looped through each of the elements found with cheerio
        console.log("scrape done");
        return results
    });
}

module.exports = quizletScrap;