export default function createWidgetsManager(
  onWidgetsUpdate: any
): {
  registerWidget(widget: any): () => void;
  update: () => void;
  getWidgets(): any[];
};
