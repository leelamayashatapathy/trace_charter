module.exports = {
  apps: [
    {
      name: "tracecharter",
      script: "npm",
      args: "start",
      cwd: "/var/www/tracecharter/current",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: 8787,
      },
    },
  ],
};
