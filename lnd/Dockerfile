# استفاده از تصویر پایه Node.js
FROM node:20-alpine

# تنظیم دایرکتوری کاری
WORKDIR /app

# کپی کردن package.json و package-lock.json
COPY package.json ./

RUN npm install
RUN npm install -g react-scripts

COPY . .
# ENV PATH="/app/node_modules/.bin:$PATH"
EXPOSE 3000
# اجرای اپلیکیشن
CMD ["npm", "start"]
