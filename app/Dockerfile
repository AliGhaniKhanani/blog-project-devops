# 1️⃣ Base Image
FROM node:18-alpine

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files first
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy remaining app code
COPY . .

# 6️⃣ Expose port
EXPOSE 3000

# 7️⃣ Start application
CMD ["node", "server.js"]
