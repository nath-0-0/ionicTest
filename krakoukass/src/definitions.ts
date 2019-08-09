declare module "@capacitor/core" {
  interface PluginRegistry {
    KrakoukassPlugin: KrakoukassPluginPlugin;
  }
}

export interface KrakoukassPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
