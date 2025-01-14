#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const QUESTIONS = [
  {
    type: "list",
    name: "language",
    message: "Choose your language:",
    choices: ["JavaScript", "TypeScript"],
  },
  {
    type: "list",
    name: "database",
    message: "Choose your database:",
    choices: ["PostgreSQL", "MongoDB"],
  },
  {
    type: "input",
    name: "projectName",
    message: "Enter your project name:",
    default: "express-app",
  },
];

const __dirname = dirname(fileURLToPath(import.meta.url));
const program = new Command();

program
  .name("create-express-app")
  .description("CLI tool to create an Express application")
  .version("1.0.0");

program.action(() => {
  inquirer
    .prompt(QUESTIONS)
    .then((answers) => {
      const { language, database, projectName } = answers;
      const templatePath = path.join(
        __dirname,
        "templates",
        language.toLowerCase(),
        database.toLowerCase()
      );

      const projectPath = path.resolve(process.cwd(), projectName);

      if (!fs.existsSync(templatePath)) {
        console.error(
          "❌ Template path not found. Check your templates folder."
        );
        process.exit(1);
      }

      fs.copy(templatePath, projectPath)
        .then(() => {
          console.log(`✅ Project '${projectName}' created successfully!`);
          console.log(`➡️ n Next steps:`);
          console.log(`  cd ${projectName}`);
          console.log(`  npm install`);
          console.log(`  npm start`);
          process.exit(0);
        })
        .then((error) => {
          console.error("❌ Error copying template:", error);
          process.exit(1);
        });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

program.parse(process.argv);
