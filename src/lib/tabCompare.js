import { matchPath } from 'react-router'

export function tabCompare({
    to,
    extpath,
    exact,
    strict,
}) {
    const path = typeof to === 'object' ? to.pathname : to

    if (Array.isArray(extpath)) {
        for (let i = 0; i < extpath.length; i++) {
            const res = matchPath(location.pathname, { path: extpath[i], exact, strict })
            if (res) return true
        }
    }
    return matchPath(location.pathname, { path, exact, strict })
}

