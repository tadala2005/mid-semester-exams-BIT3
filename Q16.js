
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
          
          const div = document.createElement("div");

          const h1 = document.createElement("h1");
          h1.textContent = product.title;

          const p = document.createElement("p");
          p.textContent = Price: ${product.price};

      
          div.appendChild(h1);
          div.appendChild(p);

          /
          document.body.appendChild(div);
        });
   
