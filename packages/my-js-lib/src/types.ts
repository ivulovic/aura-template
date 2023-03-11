export interface InjectedComponent {
    Component: React.FC;
    htmlElement: Element;
    props: Record<string, string>;
}
export type LazyLoadedComponents = Record<string, any>;