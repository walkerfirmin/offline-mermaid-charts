import * as vscode from 'vscode';
import { MermaidChartVSCode } from './mermaidChartVSCode';

/**
 * Remote sync handler - disabled for local-only mode.
 * All remote sync operations are no-ops.
 */
export class RemoteSyncHandler {
    constructor(private mcAPI: MermaidChartVSCode) {}

    async handleRemoteChanges(
        _document: vscode.TextDocument,
        _diagramId: string,
    ): Promise<'continue' | 'abort'> {
        return 'continue';
    }

    public dispose(): void {
        // no-op
    }
}
