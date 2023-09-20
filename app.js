

fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&include_market_cap=true&include_24hr_change=tru&order=market_cap_desc&per_page=50')
    .then(response => response.json())
    .then((json) => console.log(json));
