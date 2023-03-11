import React, { lazy, Suspense } from "react";

export default function lazyLoad(importFunction: any, { fallback = null } = {}) {
    const LazyComponent = lazy(importFunction);
    return (props: any) => (
        <Suspense fallback={fallback}>
            <LazyComponent {...props} />{" "}
        </Suspense>
    );
}
