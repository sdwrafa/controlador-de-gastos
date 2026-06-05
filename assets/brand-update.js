(function () {
    function applyBrandUpdate() {
        const styleId = 'sdw-brand-update-style';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                .sidebar-brand-img {
                    width: 42px;
                    height: 42px;
                    object-fit: contain;
                    flex: 0 0 42px;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.88);
                    padding: 0.22rem;
                    border: 1px solid rgba(226, 232, 240, 0.88);
                }
                .sidebar-brand-text {
                    display: flex;
                    flex-direction: column;
                    gap: 0.12rem;
                    min-width: 0;
                    font-weight: 700;
                    font-size: 0.88rem;
                    line-height: 1.16;
                    color: var(--logo-text);
                }
                .sidebar-brand-text small {
                    color: var(--text-muted);
                    font-size: 0.72rem;
                    font-weight: 500;
                }
                .header-brand {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    min-width: min(100%, 540px);
                }
                .header-brand .brand-logo-wrap {
                    width: min(260px, 44vw);
                }
                .header-brand-title {
                    margin: 0;
                    color: var(--text-main);
                    font-size: clamp(1.25rem, 2.4vw, 1.75rem);
                    font-weight: 800;
                    line-height: 1.08;
                    letter-spacing: 0;
                }
                html,
                body {
                    width: 100%;
                    max-width: 100%;
                    overflow-x: hidden;
                    overscroll-behavior-x: none;
                }
                @supports (overflow: clip) {
                    html,
                    body {
                        overflow-x: clip;
                    }
                }
                @media (max-width: 900px) {
                    :root {
                        --mobile-nav-height: 82px;
                        --mobile-page-gutter: clamp(0.75rem, 3.2vw, 1rem);
                    }
                    html {
                        min-width: 0;
                    }
                    body {
                        min-width: 0;
                        max-width: 100%;
                        min-height: 100svh;
                        position: relative;
                        touch-action: pan-y;
                        overscroll-behavior-x: none;
                    }
                    body.auth-locked {
                        position: fixed;
                        inset: 0;
                        width: 100%;
                        height: 100dvh;
                        overflow: hidden !important;
                        touch-action: none;
                    }
                    body.auth-locked .login-overlay {
                        width: 100dvw;
                        height: var(--sdw-vvh, 100dvh);
                        min-height: var(--sdw-vvh, 100dvh);
                        overflow-x: hidden;
                        overflow-y: auto;
                        overscroll-behavior: contain;
                        touch-action: pan-y;
                    }
                    body.auth-locked .login-card {
                        width: min(100%, 420px);
                        max-width: calc(100dvw - 2rem);
                        margin-inline: auto;
                    }
                    .header-brand {
                        width: 100%;
                        gap: 0.75rem;
                        align-items: center;
                    }
                    .header-brand .brand-logo-wrap {
                        width: min(170px, 48vw);
                        flex: 0 0 auto;
                    }
                    .header-brand-title {
                        font-size: clamp(1.02rem, 5vw, 1.35rem);
                        overflow-wrap: anywhere;
                    }
                    .main-content,
                    .spa-view,
                    .container,
                    header,
                    .card,
                    .login-card,
                    .summary-card,
                    .smart-alert-card,
                    .expense-list,
                    .expense-item,
                    .saving-card,
                    .wish-item,
                    .form-group,
                    form,
                    fieldset,
                    label {
                        max-width: 100%;
                        min-width: 0;
                    }
                    .main-content,
                    .sidebar:hover ~ .main-content {
                        width: 100%;
                        max-width: 100%;
                        margin-left: 0 !important;
                        overflow-x: hidden;
                        contain: inline-size;
                        transform: none !important;
                        padding-left: var(--mobile-page-gutter);
                        padding-right: var(--mobile-page-gutter);
                        padding-bottom: calc(var(--mobile-nav-height) + max(1rem, env(safe-area-inset-bottom)));
                    }
                    @supports (overflow: clip) {
                        .main-content,
                        .sidebar:hover ~ .main-content {
                            overflow-x: clip;
                        }
                    }
                    .container,
                    .forms-grid,
                    .summary-box,
                    .savings-grid,
                    .quarantine-grid,
                    .dashboard-layout,
                    #dashboard-column,
                    #forms-column {
                        width: 100%;
                        max-width: 100%;
                        min-width: 0;
                        overflow-x: hidden;
                    }
                    .card,
                    .summary-card,
                    .smart-alert-card,
                    .expense-item,
                    .saving-card,
                    .wish-item {
                        overflow-wrap: anywhere;
                        transform: none !important;
                    }
                    .expense-details,
                    .expense-value,
                    .saving-header,
                    .saving-amounts,
                    .wish-header,
                    .wish-info,
                    .wish-footer,
                    .wish-actions {
                        max-width: 100%;
                        min-width: 0;
                    }
                    input,
                    select,
                    textarea,
                    button,
                    .form-control,
                    .btn,
                    .picker-trigger {
                        max-width: 100%;
                        min-width: 0;
                    }
                    canvas,
                    .chart-container,
                    .main-line-chart-container,
                    .line-chart-container {
                        max-width: 100%;
                    }
                    .sidebar {
                        width: 100dvw !important;
                        max-width: 100dvw;
                        left: 0;
                        right: 0;
                        overflow-x: auto;
                        overflow-y: hidden;
                        overscroll-behavior-x: contain;
                        -webkit-overflow-scrolling: touch;
                        touch-action: pan-x;
                        scrollbar-width: none;
                        contain: layout paint style;
                        transform: translate3d(0, 0, 0);
                        will-change: transform;
                    }
                    .sidebar::-webkit-scrollbar {
                        display: none;
                    }
                    .sidebar-nav {
                        width: max-content;
                        max-width: none;
                        min-width: 100%;
                    }
                    .sidebar-nav li {
                        flex: 0 0 clamp(66px, 18vw, 74px);
                    }
                    .flatpickr-calendar,
                    .picker-dropdown {
                        max-width: calc(100dvw - 1rem) !important;
                    }
                    .flatpickr-calendar.open {
                        left: 50% !important;
                        right: auto !important;
                        transform: translateX(-50%) !important;
                    }
                    .slider-captcha,
                    .slider-handle {
                        touch-action: none;
                        -webkit-user-drag: none;
                        -webkit-tap-highlight-color: transparent;
                    }
                    body.keyboard-open {
                        overflow-x: hidden !important;
                    }
                    body.keyboard-open .sidebar {
                        opacity: 0;
                        pointer-events: none;
                        transform: translate3d(0, calc(100% + env(safe-area-inset-bottom)), 0) !important;
                    }
                    body.keyboard-open .main-content {
                        padding-bottom: 1rem;
                    }
                    body.keyboard-open #toast-container {
                        bottom: 0.75rem;
                    }
                    body.keyboard-open .flatpickr-calendar {
                        max-height: min(320px, 70svh) !important;
                        overflow-y: auto !important;
                    }
                }
                @media (max-width: 480px) {
                    .header-brand {
                        gap: 0.6rem;
                    }
                    .header-brand .brand-logo-wrap {
                        width: min(150px, 48vw);
                    }
                    .header-brand-title {
                        font-size: 1rem;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        const sidebarLogo = document.querySelector('.sidebar-logo');
        if (sidebarLogo && !sidebarLogo.querySelector('.sidebar-brand-img')) {
            sidebarLogo.innerHTML = `
                <img class="sidebar-brand-img" src="assets/sdw-logo.svg" alt="SDW">
                <div class="sidebar-brand-text">
                    <span>Controlador RP</span>
                    <small>1.2</small>
                </div>
            `;
        }

        const header = document.querySelector('.main-content > header');
        const logoWrap = header?.querySelector('.brand-logo-wrap');
        if (header && logoWrap && !header.querySelector('.header-brand-title')) {
            const brand = document.createElement('div');
            brand.className = 'header-brand';
            logoWrap.replaceWith(brand);
            brand.appendChild(logoWrap);

            const title = document.createElement('h1');
            title.className = 'header-brand-title';
            title.textContent = 'Controlador de gastos RP';
            brand.appendChild(title);
        }

        installMobileStability();
    }

    function installMobileStability() {
        if (window.__sdwMobileStabilityInstalled) return;
        window.__sdwMobileStabilityInstalled = true;

        const fieldSelector = 'input, textarea, select, [contenteditable="true"]';
        const mobileQuery = window.matchMedia('(max-width: 900px)');
        let viewportFrame = 0;
        let focusTimer = 0;

        function isMobileWidth() {
            return mobileQuery.matches;
        }

        function isEditableField(element) {
            return Boolean(element?.matches?.(fieldSelector));
        }

        function resetHorizontalScroll() {
            if (window.scrollX !== 0) {
                window.scrollTo(0, window.scrollY);
            }
            if (document.documentElement) document.documentElement.scrollLeft = 0;
            if (document.body) document.body.scrollLeft = 0;
        }

        function syncViewportHeight() {
            const height = Math.round(window.visualViewport?.height || window.innerHeight || 0);
            if (height > 0) {
                document.documentElement.style.setProperty('--sdw-vvh', `${height}px`);
            }
        }

        function setKeyboardState(forceState) {
            if (!document.body) return;
            syncViewportHeight();

            if (!isMobileWidth()) {
                document.body.classList.remove('keyboard-open');
                resetHorizontalScroll();
                return;
            }

            const visualViewport = window.visualViewport;
            const heightGap = visualViewport ? Math.max(0, window.innerHeight - visualViewport.height) : 0;
            const active = document.activeElement;
            const focusedField = isEditableField(active);
            const keyboardLikelyOpen = typeof forceState === 'boolean'
                ? forceState
                : (heightGap > 120 || (focusedField && heightGap > 60));

            document.body.classList.toggle('keyboard-open', Boolean(keyboardLikelyOpen));
            resetHorizontalScroll();
        }

        function scheduleViewportSync() {
            if (viewportFrame) return;
            viewportFrame = window.requestAnimationFrame(() => {
                viewportFrame = 0;
                setKeyboardState();
            });
        }

        document.addEventListener('focusin', (event) => {
            if (!isEditableField(event.target)) return;
            setKeyboardState(true);
            window.clearTimeout(focusTimer);
            focusTimer = window.setTimeout(() => {
                event.target.scrollIntoView?.({ block: 'center', inline: 'nearest', behavior: 'smooth' });
                resetHorizontalScroll();
            }, 180);
        }, true);

        document.addEventListener('focusout', () => {
            window.clearTimeout(focusTimer);
            focusTimer = window.setTimeout(() => setKeyboardState(), 120);
        }, true);

        document.addEventListener('touchmove', (event) => {
            if (event.target?.closest?.('#captcha-slider, .slider-captcha, .slider-handle')) {
                event.preventDefault();
            }
        }, { capture: true, passive: false });

        window.addEventListener('resize', scheduleViewportSync, { passive: true });
        window.addEventListener('orientationchange', () => window.setTimeout(scheduleViewportSync, 250), { passive: true });
        window.addEventListener('scroll', resetHorizontalScroll, { passive: true });
        window.addEventListener('pageshow', scheduleViewportSync, { passive: true });

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', scheduleViewportSync, { passive: true });
            window.visualViewport.addEventListener('scroll', resetHorizontalScroll, { passive: true });
        }

        if (mobileQuery.addEventListener) {
            mobileQuery.addEventListener('change', scheduleViewportSync);
        } else {
            mobileQuery.addListener(scheduleViewportSync);
        }

        syncViewportHeight();
        resetHorizontalScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyBrandUpdate);
    } else {
        applyBrandUpdate();
    }
})();
