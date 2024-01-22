 // Load orders from local storage on page load
 const orders = JSON.parse(localStorage.getItem('orders')) || [];
 updateOrderList();

 function addToBill() {
     const dishInput = document.getElementById('dish');
     const priceInput = document.getElementById('price');
     const tableSelect = document.getElementById('table');

     const dish = dishInput.value.trim();
     const price = parseFloat(priceInput.value);
     const table = tableSelect.value;

     if (dish && !isNaN(price) && table) {
         // Add order to the orders array
         const order = { dish, price, table };
         orders.push(order);

         // Save orders to local storage
         localStorage.setItem('orders', JSON.stringify(orders));

         // Update the order list on the page
         updateOrderList();

         // Optionally, you can update the backend using fetch
         updateBackend(order);

         // Clear the form inputs
         dishInput.value = '';
         priceInput.value = '';
         tableSelect.value = 'table1';
     }
 }

 function updateOrderList() {
     const orderList = document.getElementById('orderList');
     orderList.innerHTML = '';

     orders.forEach(order => {
         const listItem = document.createElement('li');
         listItem.textContent = `${order.dish} - $${order.price.toFixed(2)} - ${order.table}`;
         orderList.appendChild(listItem);
     });
 }

 function updateBackend(order) {
     // Replace 'your-api-endpoint' with the actual endpoint provided by curdcurd.in
     const apiUrl = 'https://your-api-endpoint';

     // Use fetch to update the backend
     fetch(apiUrl, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(order),
     })
     .then(response => response.json())
     .then(data => {
         console.log('Backend updated:', data);
     })
     .catch(error => {
         console.error('Error updating backend:', error);
     });
 }