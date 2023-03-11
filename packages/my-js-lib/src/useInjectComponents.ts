import { useMemo } from "react";
import { InjectedComponent, LazyLoadedComponents } from "./types";

export default function useInjectComponents(dynamicComponents: LazyLoadedComponents ): Array<InjectedComponent>{

    const DATA_ATTR_PROP = 'data-prop-';
    const DATA_ATTR_COMPONENT = 'data-component';
    const DATA_ATTR_PROP_LENGTH = DATA_ATTR_PROP.length;

    const createComponentFromHTMLElement = (htmlElement: Element) => {

        let Component = null;
        let props: Record<string, string> = {};
        const attributes = htmlElement.getAttributeNames();

        for(const attribute of attributes){
            const value = htmlElement.getAttribute(attribute);
            if(!value){
                continue;
            }
            if(attribute === DATA_ATTR_COMPONENT){
                Component = dynamicComponents[value];
            } else if(attribute.startsWith(DATA_ATTR_PROP)){
                const propName = attribute.slice(DATA_ATTR_PROP_LENGTH).toLowerCase();
                props[propName] = value;
            }
        }

        if(!Component){
            return null;
        }
        return { Component, props, htmlElement };
    }

    const components = useMemo(() => {
        const elements = document.querySelectorAll(`[${DATA_ATTR_COMPONENT}]`); // NodeListOf<Element>;
        const list = [];
        for(const element of elements){
            const reactComponent = createComponentFromHTMLElement(element);
            if(reactComponent){
                list.push(reactComponent);
            }
        }
        return list;
    }, [dynamicComponents]);

    return components;
}