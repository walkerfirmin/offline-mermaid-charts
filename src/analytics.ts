class Analytics {

  public sendEvent(_eventName: string, _eventID:string, _errorMessage?: string, _diagramType?:string) {
    // Analytics disabled for local-only mode
    return;
  }

  public trackActivation() {
    this.sendEvent('VS Code Extension Activated','VS_CODE_PLUGIN_ACTIVATION');
  }

  public trackException(error: any) {
    if (error instanceof Error) {
      this.sendEvent('VS Code Extension Exception', 'VS_CODE_PLUGIN_EXCEPTION', error.message);
    } else {
      this.sendEvent('VS Code Extension Exception','VS_CODE_PLUGIN_EXCEPTION', "Unknown error occurred");
    }
  }

  public trackLogin() {
    this.sendEvent('VS Code User Logged In','VS_CODE_PLUGIN_LOGIN');
  }

  public trackLogout() {
    this.sendEvent('VS Code User Logged Out','VS_CODE_PLUGIN_LOGOUT');
  }

  public trackAIChatInvocation() {
    this.sendEvent('VS Code AI Chat Participant Invoked','VS_CODE_PLUGIN_AI_CHAT_INVOCATION');
  }
  
  public trackAIGeneratedDiagram(diagramType: string) {
    this.sendEvent(`VS Code AI Chat Generated Diagram`, 'VS_CODE_PLUGIN_AI_CHAT_GENERATE_DIAGRAM', undefined, diagramType);
  }
  
  public trackRegenerateCommandInvoked() {
    this.sendEvent('VS Code Regenerate Command Invoked','VS_CODE_PLUGIN_REGENERATE_DIAGRAM');
  }
  public trackModelNotFound() {
    this.sendEvent('VS Code AI  Model Not Found','VS_CODE_PLUGIN_MODEL_NOT_FOUND');
  }
}


export default new Analytics(); 