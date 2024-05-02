
var data1 = '';
const fetchData = async(index) => {
    const res = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    const data = await res.json();
    const dataArr = data.categories[index].category_products;
    
    // clear all the existing data from cards container
    data1=' '
    // display data for the clicked category
    dataArr.map(values => {
        data1+=`
        <div class="card">
        <img
          class="card_image"
          src=${values.image}
          alt="card_image"
        />
        <p class="card_badge">${values.badge_text!=null ?values.badge_text : ''}</p>
        <div class="card_info">
          <h3 class="card_title">${values.title.length>12 ? values.title.substring(0,9) + '...' : values.title}</h3>
          <li class="card_brand">${values.vendor}</li>
          <p class="card_discounted_price">Rs.${values.price}</p>
          <s class="card_original_price">${values.compare_at_price}</s>
          <p class="card_discount">50% Off</p>
          <button type="button" class="add_to_cart_btn">Add to Cart</button>
        </div>
      </div>
        `
    })
    document.querySelector('.cards').innerHTML = data1
}
// initially display data for Men 
fetchData(0);

const categories = document.querySelectorAll('.category');

categories.forEach((category,index) => {
    category.addEventListener('click',(e) => {
        // clearing styling for all other tabs
        categories.forEach(cat => {
            cat.style.backgroundColor = 'rgb(228, 228, 228';
            cat.style.color = 'black';
        })
        // styling for the clicked tab
        category.style.backgroundColor = 'black';
        category.style.color='white'
        // fetching data for the clicked tab
        fetchData(index);
    })
});

