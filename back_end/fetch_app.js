const fetch = require("node-fetch");


setInterval(() => {
    fetch(url)
        .then(
            (res) => res.json()
        ).then(
            (data) => {
                exports.data = data;
            }
        ).catch(
            (err) => console.log(err)
        )
}, 1000)








