import * as vscode from "vscode";
import { enterText, askForNumber, generateTable } from "./tools";

export const disposables: Array<vscode.Disposable> = [
  vscode.commands.registerCommand("speedy-markdown.table", async () => {
    let rows: number = await askForNumber(undefined, "Number of rows");
    let columns: number = await askForNumber(undefined, "Number of columns");

    if (!Number.isNaN(rows) && !Number.isNaN(columns)) {
      enterText(generateTable(rows, columns));
    }
  }),
];
