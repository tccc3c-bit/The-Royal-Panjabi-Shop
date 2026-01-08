body {
  font-family: Arial, sans-serif;
  margin: 0;
  background: #f5f5f5;
  color: #222;
}

.header {
  background: #111;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.product {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background: #fff;
}

.product img {
  max-width: 350px;
  width: 100%;
  border-radius: 10px;
}

.details {
  padding: 20px;
  max-width: 500px;
}

.details h2 {
  margin-top: 0;
}

.details ul {
  padding-left: 20px;
}

.price {
  margin-top: 15px;
  font-size: 22px;
}

.price .old {
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
}

.price .new {
  color: #e60000;
  font-weight: bold;
}

.order {
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
}

.order h2 {
  text-align: center;
}

.order form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.order input,
.order textarea,
.order select {
  padding: 10px;
  font-size: 16px;
}

.order button {
  background: #111;
  color: #fff;
  padding: 12px;
  font-size: 18px;
  border: none;
  cursor: pointer;
}

.order button:hover {
  background: #333;
}

footer {
  text-align: center;
  padding: 15px;
  background: #111;
  color: #fff;
}
