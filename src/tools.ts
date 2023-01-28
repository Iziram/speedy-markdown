import { StreamOptions } from "stream";
import { isStringObject } from "util/types";
import * as vscode from "vscode";
/**
 * Fonction permettant d'écrire sur l'éditeur de texte à une position spécifique
 * @param text Le texte à écrire
 * @param position La position à laquelle écrire (le curseur si non spécifiée)
 */
export function enterText(text: string, position?: vscode.Position) {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    editor.edit((editBuilder) => {
      if (position) {
        editBuilder.insert(position, text);
      } else {
        editBuilder.insert(editor.selection.active, text);
      }
    });
  }
}

export const configuration =
  vscode.workspace.getConfiguration("speedy-markdown");

export async function askForNumber(
  value: string = "",
  placeholder: string = ""
) {
  const result = await vscode.window.showInputBox({
    value: value,
    placeHolder: placeholder,
  });
  if (result !== undefined) {
    try {
      const num: number = parseInt(result);
      return num;
    } catch (unused) {
      return NaN;
    }
  } else {
    return NaN;
  }
}

export function generateTable(rows: number, columns: number) {
  const symbole = (s: string = "") => {
    return `${s}|`;
  };

  const header: string =
    "|" +
    symbole("").repeat(columns) +
    "\n|" +
    symbole("---").repeat(columns) +
    "\n";
  const body: string = `|${symbole().repeat(rows)}\n`.repeat(rows);

  return header + body;
}
