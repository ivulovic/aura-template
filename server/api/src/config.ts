const Config = {
  DB_STRING: import.meta.env.VITE_DB_STRING || process.env.DB_STRING,
};

export default Config;
