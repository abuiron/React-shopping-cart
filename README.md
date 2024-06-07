# React Shopping Cart

This repository contains a shopping cart application built with React and Vite. The application mimics the functionality of popular e-commerce platforms like Amazon and Flipkart. Users can browse products, add them to the cart, and remove them from the cart. The cart's total value is dynamically updated based on user interactions.

## Features

- Browse products and view details.
- Add products to the cart.
- Remove products from the cart.
- Cart total value updates in real-time.
- Responsive design using React Bootstrap.

## Deployment

The application is deployed and can be accessed at: [https://abuironproducts.netlify.app](https://abuironproducts.netlify.app)

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/react-shopping-cart.git
    ```
   
2. Navigate to the project directory:
    ```sh
    cd react-shopping-cart
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

5. Open your browser and go to `http://localhost:3000` to see the application running.

## Usage

Once the application is running, you can:

1. **Browse Products**: The main page displays a list of products. Each product shows its name, price, and an "Add to Cart" button.
2. **Add to Cart**: Click the "Add to Cart" button to add a product to the cart. The cart value displayed in the navbar will increase, and the button will change to "Remove from Cart".
3. **Remove from Cart**: Click the "Remove from Cart" button to remove a product from the cart. The cart value will decrease, and the button will revert to "Add to Cart".

## Project Structure

The project is structured as follows:

react-shopping-cart/
│
├── public/
│ └── index.html
│
├── src/
│ ├── Header.jsx
│ ├── Navbar.jsx
│ ├── Card.jsx
│ ├── Footer.jsx
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│
├── package.json
├── README.md
├── vite.config.js
└── ...


### Components

- **Navbar.jsx**: Contains the navigation bar with the cart value indicator.
- **Header.jsx**: Contains the header section of the application.
- **Card.jsx**: Represents individual product items. Each product has an "Add to Cart" or "Remove from Cart" button.
- **Footer.jsx**: Contains the footer section of the application.
- **App.jsx**: Combines all the components into the main application.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **React Bootstrap**: A library that provides Bootstrap components for React.
- **Netlify**: For deployment of the application.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any feature enhancements, bug fixes, or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact:

- **Name**: Abuthakir S
- **Email**: abuiron80@gmail.com

Feel free to explore and contribute to this project. Happy coding!
