CREATE TABLE IF NOT EXISTS users
(
    uid        int(11)      NOT NULL AUTO_INCREMENT,
    username   varchar(255) NOT NULL,
    password   varchar(255) NOT NULL,
    email      varchar(255) NOT NULL,
    phone      varchar(255) NOT NULL,
    address    varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (uid)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS products
(
    pid         INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(255)   NOT NULL,
    price       DECIMAL(10, 2) NOT NULL,
    category    VARCHAR(50)    NOT NULL,
    description VARCHAR(500)   NOT NULL,
    stock       INT            NOT NULL,
    image_url   VARCHAR(255)   NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cart
(
    cid           INT AUTO_INCREMENT PRIMARY KEY,
    user_id       INT            NOT NULL,
    product_id    INT            NOT NULL,
    quantity      INT            NOT NULL,
    product_name  VARCHAR(255)   NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    status        VARCHAR(20) DEFAULT 'active',
    created_at    TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (uid),
    FOREIGN KEY (product_id) REFERENCES products (pid)
);


CREATE TABLE IF NOT EXISTS orders
(
    oid              INT AUTO_INCREMENT PRIMARY KEY,
    user_id          INT            NOT NULL,
    total_price      DECIMAL(10, 2) NOT NULL,
    status           VARCHAR(20) DEFAULT 'pending',
    shipping_address VARCHAR(255)   NOT NULL,
    created_at       TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (uid)
);

CREATE TABLE IF NOT EXISTS order_items
(
    item_id       INT AUTO_INCREMENT PRIMARY KEY,
    order_id      INT            NOT NULL,
    product_id    INT            NOT NULL,
    quantity      INT            NOT NULL,
    product_name  VARCHAR(255)   NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (oid),
    FOREIGN KEY (product_id) REFERENCES products (pid)
);


-- insert data (products)
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('MacBook Air', 1350000, 'Apple', '애플 M1 칩을 탑재한 맥북 에어', 15, 'https://example.com/macbook-air.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('MacBook Pro M3', 2690000, 'Apple', '애플 M3 칩을 탑재한 맥북 프로', 10, 'https://example.com/macbook-pro-m3.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('MacBook Pro Max M3', 3300000, 'Apple', '애플 M3 칩을 탑재한 맥북 프로 맥스', 8, 'https://example.com/macbook-pro-max-m3.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('iPhone 13', 1090000, 'Apple', '아이폰 13', 20, 'https://example.com/iphone-13.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('iPhone 13 Pro', 1350000, 'Apple', '아이폰 13 프로', 18, 'https://example.com/iphone-13-pro.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('iPhone 13 Pro Max', 1550000, 'Apple', '아이폰 13 프로 맥스', 15, 'https://example.com/iphone-13-pro-max.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('iPad Air', 850000, 'Apple', '애플 M1 칩을 탑재한 아이패드 에어', 25, 'https://example.com/ipad-air.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('iPad Pro', 1100000, 'Apple', '애플 M2 칩을 탑재한 아이패드 프로', 12, 'https://example.com/ipad-pro.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('Apple Watch Series 7', 530000, 'Apple', '애플 워치 시리즈 7', 30, 'https://example.com/apple-watch-series-7.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('Apple Watch SE', 370000, 'Apple', '애플 워치 SE', 20, 'https://example.com/apple-watch-se.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('AirPods Pro', 329000, 'Apple', '에어팟 프로', 25, 'https://example.com/airpods-pro.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('AirPods Max', 719000, 'Apple', '에어팟 맥스', 15, 'https://example.com/airpods-max.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('HomePod Mini', 129000, 'Apple', '홈팟 미니', 50, 'https://example.com/homepod-mini.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('Apple TV 4K', 229000, 'Apple', '애플 TV 4K', 20, 'https://example.com/apple-tv-4k.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('Mac Mini', 1140000, 'Apple', '애플 M2 칩을 탑재한 맥 미니', 10, 'https://example.com/mac-mini.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('Mac Studio', 2390000, 'Apple', '애플 M1 맥스 칩을 탑재한 맥 스튜디오', 8, 'https://example.com/mac-studio.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('iMac 24-inch', 1690000, 'Apple', '애플 M1 칩을 탑재한 24인치 아이맥', 12, 'https://example.com/imac-24.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('Pro Display XDR', 5990000, 'Apple', '애플 프로 디스플레이 XDR', 5, 'https://example.com/pro-display-xdr.jpg');
INSERT INTO products (name, price, category, description, stock, image_url)
VALUES ('Magic Keyboard', 149000, 'Apple', '매직 키보드', 40, 'https://example.com/magic-keyboard.jpg');