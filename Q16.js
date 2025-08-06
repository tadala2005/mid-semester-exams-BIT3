
    <script>
        const products = [
          { title: "Wireless Headphones", price: 59.99 },
          { title: "Electric Kettle", price: 29.99 },
          { title: "Yoga Mat", price: 19.99 },
          { title: "Smart Watch", price: 199.99 },
          { title: "Coffee Maker", price: 89.99 },
          { title: "Running Shoes", price: 120.00 }
        ];

        // Loop through each element in the array
        products.forEach(product => {
          // Create a div element
          const div = document.createElement("div");

          // Creates an <h1> element to contain the title
          const h1 = document.createElement("h1");
          h1.textContent = product.title;

          // Creates p element to contain the price
          const p = document.createElement("p");
          p.textContent = Price: ${product.price};

          // Appends the h1 and the p elements to the div
          div.appendChild(h1);
          div.appendChild(p);

          // Appends the div to the body element
          document.body.appendChild(div);
        });
    </script>
