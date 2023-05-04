$(document).ready(function() {
    const form = $('#search-form');
    const input = $('#search-input');
    const gifContainer = $('#gif-container');
    const removeBtn = $('#remove-btn');

    //add event listener to form
    form.submit(function(event) {
        event.preventDefault(); //prevent page from reloading
    
    // get search term
    const searchTerm = input.val();

    // get request to API
    axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: 'iWi4Uu9aGsWDgAtupqSLUovpKY1tluDs',
            q: searchTerm
        }
    })
    .then(function(response) {
        const gifs = response.data.data; // array of gifs
        // log response
        console.log(response.data);
        // clear gif container
        gifContainer.empty();

        // Get a random GIF from the array
      const randomIndex = Math.floor(Math.random() * gifs.length);
      const randomGif = gifs[randomIndex];

        // Create a new image element
        const imageUrl = randomGif.images.downsized.url;
        const imgElement = $('<img>').attr('src', imageUrl);

        // Append the image element to the gif container
        gifContainer.append(imgElement);
    })
    .catch(function(error) {
        // log error
        console.log(error);
    });
    
    // clear search input
    input.val('');
    });
    removeBtn.click(function() {
        gifContainer.empty(); // Remove all GIFs from the container
});
});
