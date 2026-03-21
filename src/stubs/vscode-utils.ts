/**
 * Local stub for @mermaid-chart/vscode-utils
 * Provides no-op implementations for local-only mode.
 */
import * as vscode from 'vscode';

export interface PreviewBridge {
  createOrShowPreview(documentUri?: string, code?: string): Promise<void>;
}

export interface ValidationBridge {
  validateDiagram(code: string): Promise<{valid: boolean, error?: string}>;
}

export interface DiagramDiffBridge {
  openDiagramDiffWebviews: (oldContent: string, newContent: string) => (() => void);
}

export function setPreviewBridge(_bridge: PreviewBridge): void {
  // no-op in local mode
}

export function setValidationBridge(_bridge: ValidationBridge): void {
  // no-op in local mode
}

export function setDiagramDiffBridge(_bridge: DiagramDiffBridge): void {
  // no-op in local mode
}

export function registerTools(_context: vscode.ExtensionContext): void {
  // no-op in local mode
}

export function initializePlugin(_pluginID: string): void {
  // no-op in local mode
}

export const aiHandler: vscode.ChatRequestHandler = async (
  _request: vscode.ChatRequest,
  _context: vscode.ChatContext,
  stream: vscode.ChatResponseStream,
  _token: vscode.CancellationToken
) => {
  stream.markdown('AI chat features require a Mermaid Chart login and are not available in local-only mode.');
};

export class DiagramRegenerator {
  static async regenerateDiagram(
    _uri: vscode.Uri,
    _originalQuery?: string,
    _changedFiles?: string[],
    _metadata?: any
  ): Promise<void> {
    vscode.window.showInformationMessage('Diagram regeneration requires a Mermaid Chart login and is not available in local-only mode.');
  }
}
