import * as vscode from "vscode";
import { MermaidChartVSCode } from "../../mermaidChartVSCode";
import { DiagramRegenerator } from '../../stubs/vscode-utils';


export function registerRegenerateCommand(context: vscode.ExtensionContext, mcAPI: MermaidChartVSCode) {
  context.subscriptions.push(
    vscode.commands.registerCommand('mermaidChart.regenerateDiagram', 
      async (uri: vscode.Uri, originalQuery?: string, changedFiles?: string[], metadata?: any, _isLoggedIn?: boolean) => {
        // Skip login check for local-only mode
        await DiagramRegenerator.regenerateDiagram(uri, originalQuery, changedFiles, metadata);
      }
    )
  );
} 