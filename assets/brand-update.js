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
                @media (max-width: 900px) {
                    :root {
                        --mobile-content-max: 560px;
                        --mobile-card-gap: 0.9rem;
                        --mobile-nav-height: 86px;
                    }
                    .main-content,
                    .sidebar:hover ~ .main-content {
                        display: block;
                        padding-top: 0.8rem;
                        padding-left: max(0.8rem, env(safe-area-inset-left));
                        padding-right: max(0.8rem, env(safe-area-inset-right));
                        padding-bottom: calc(var(--mobile-nav-height) + 1rem + env(safe-area-inset-bottom));
                    }
                    .main-content > header,
                    .spa-view > .container,
                    .spa-view > section.card,
                    .spa-view > .card,
                    #view-main > .container,
                    #view-historico > section.card,
                    #view-evolucao > section.card,
                    #view-economias > .container,
                    #view-quarentena > .quarantine-grid {
                        width: min(100%, var(--mobile-content-max));
                        max-width: var(--mobile-content-max);
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .container {
                        gap: var(--mobile-card-gap) !important;
                    }
                    #dashboard-column,
                    #forms-column,
                    #view-economias .container > div {
                        gap: var(--mobile-card-gap) !important;
                    }
                    .card,
                    .saving-card,
                    .wish-item,
                    .expense-item {
                        width: 100%;
                        max-width: 100%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 10px;
                    }
                    .card {
                        padding: clamp(0.9rem, 3.8vw, 1.05rem);
                    }
                    .card h2 {
                        font-size: clamp(1.05rem, 4.5vw, 1.24rem);
                        line-height: 1.2;
                        margin-bottom: 0.9rem;
                    }
                    .main-content > header {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 0.8rem;
                        padding: 0.85rem;
                        margin-bottom: 0.95rem;
                    }
                    .header-brand {
                        display: grid;
                        grid-template-columns: auto minmax(0, 1fr);
                        gap: 0.7rem;
                        justify-content: center;
                        align-items: center;
                    }
                    .header-brand .brand-logo-wrap,
                    .brand-logo-wrap {
                        width: min(132px, 38vw);
                        min-height: 44px;
                        padding: 0.25rem 0.4rem;
                    }
                    .brand-logo-img {
                        max-height: 40px;
                    }
                    .header-brand-title {
                        font-size: clamp(1rem, 4.8vw, 1.24rem);
                        line-height: 1.08;
                    }
                    .header-actions {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 0.65rem;
                        width: 100%;
                    }
                    .theme-toggle-btn {
                        justify-content: center;
                        min-height: 44px;
                        padding: 0.65rem 0.8rem;
                    }
                    .budget-control {
                        display: grid;
                        grid-template-columns: auto minmax(112px, 1fr);
                        align-items: center;
                        gap: 0.75rem;
                        width: 100%;
                    }
                    .budget-control input {
                        width: 100%;
                    }
                    body[data-active-view]:not([data-active-view="view-main"]) .main-content > header {
                        padding: 0.7rem;
                        margin-bottom: 0.75rem;
                    }
                    body[data-active-view]:not([data-active-view="view-main"]) .header-brand .brand-logo-wrap {
                        width: min(112px, 34vw);
                        min-height: 38px;
                    }
                    body[data-active-view]:not([data-active-view="view-main"]) .brand-logo-img {
                        max-height: 34px;
                    }
                    body[data-active-view]:not([data-active-view="view-main"]) .header-brand-title {
                        font-size: clamp(0.92rem, 4.3vw, 1.08rem);
                    }
                    #view-main .card:nth-of-type(n+3):empty,
                    #month-comparison:empty,
                    #top-expenses:empty {
                        display: none;
                    }
                    .summary-box {
                        grid-template-columns: 1fr;
                        gap: 0.65rem;
                        margin-bottom: 1rem;
                    }
                    .summary-card {
                        padding: 0.85rem;
                    }
                    .summary-card p {
                        font-size: clamp(1.3rem, 8vw, 1.65rem);
                    }
                    .smart-alert-card {
                        display: grid;
                        grid-template-columns: auto minmax(0, 1fr);
                        align-items: center;
                        padding: 0.85rem;
                    }
                    .alert-icon {
                        font-size: 1.4rem;
                    }
                    .chart-container {
                        width: min(220px, 62vw);
                        height: min(220px, 62vw);
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .main-line-chart-container,
                    .line-chart-container {
                        height: clamp(190px, 54vw, 240px);
                    }
                    .forms-grid,
                    #income-form div[style*="grid-template-columns"],
                    #expense-form div[style*="grid-template-columns"],
                    #saving-form div[style*="grid-template-columns"],
                    #view-historico section.card > div[style*="grid-template-columns"] {
                        display: grid !important;
                        grid-template-columns: 1fr !important;
                        gap: 0.7rem !important;
                    }
                    #view-historico .card h2 {
                        text-align: center;
                    }
                    #filter-category,
                    #filter-search,
                    #filter-from,
                    #filter-to,
                    #view-historico .flatpickr-input,
                    #view-historico button {
                        width: 100% !important;
                    }
                    #filter-summary {
                        text-align: center;
                        line-height: 1.35;
                    }
                    .expense-list {
                        margin-top: 0.75rem;
                    }
                    .expense-item {
                        padding: 0.85rem;
                    }
                    #view-economias section > h2 {
                        text-align: center;
                        font-size: clamp(1.12rem, 5vw, 1.35rem) !important;
                    }
                    #saving-form .btn {
                        width: 100% !important;
                        max-width: none !important;
                    }
                    .savings-grid {
                        display: grid !important;
                        grid-template-columns: 1fr !important;
                        gap: 0.85rem !important;
                    }
                    .saving-card {
                        padding: 0.95rem;
                    }
                    .saving-header {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr) auto;
                        align-items: start;
                        gap: 0.75rem;
                    }
                    .saving-title {
                        font-size: 1.05rem;
                        line-height: 1.2;
                    }
                    .saving-amounts {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 0.25rem;
                        text-align: left;
                    }
                    .saving-card > div[style*="display:flex"][style*="margin-top:auto"] {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr;
                        gap: 0.6rem !important;
                    }
                    .btn-wish,
                    .saving-card .btn,
                    .expense-item .btn,
                    .expense-item .btn-delete {
                        min-height: 42px;
                    }
                    .sidebar {
                        width: 100% !important;
                        max-width: 100%;
                        overflow: hidden;
                        padding: 0.42rem max(0.35rem, env(safe-area-inset-left)) calc(0.42rem + env(safe-area-inset-bottom)) max(0.35rem, env(safe-area-inset-right));
                    }
                    .sidebar-nav {
                        display: grid;
                        grid-template-columns: repeat(5, minmax(0, 1fr));
                        gap: 0.18rem;
                        width: 100%;
                        min-width: 0;
                    }
                    .sidebar-nav li {
                        flex: none;
                        min-width: 0;
                    }
                    .sidebar-nav li:nth-of-type(n+6),
                    #import-file {
                        display: none !important;
                    }
                    .sidebar-nav li a,
                    .sidebar:hover .sidebar-nav li a {
                        min-height: 58px;
                        padding: 0.38rem 0.2rem;
                        border-radius: 10px;
                    }
                    .nav-icon {
                        width: 21px;
                        height: 21px;
                    }
                    .nav-text,
                    .sidebar:hover .nav-text {
                        max-width: 100%;
                        font-size: clamp(0.56rem, 2.6vw, 0.68rem);
                        line-height: 1.05;
                    }
                }
                @media (max-width: 390px) {
                    .main-content,
                    .sidebar:hover ~ .main-content {
                        padding-left: 0.65rem;
                        padding-right: 0.65rem;
                    }
                    .header-brand {
                        grid-template-columns: auto minmax(0, 1fr);
                        gap: 0.55rem;
                    }
                    .header-brand .brand-logo-wrap,
                    .brand-logo-wrap {
                        width: min(120px, 36vw);
                    }
                    .header-brand-title {
                        font-size: 0.98rem;
                    }
                    .card {
                        padding: 0.82rem;
                    }
                    .nav-text,
                    .sidebar:hover .nav-text {
                        font-size: 0.56rem;
                    }
                }
                @media (max-width: 900px) {
                    :root {
                        --mobile-content-max: 480px;
                        --mobile-page-gutter: clamp(0.75rem, 4vw, 1rem);
                        --mobile-nav-height: 88px;
                    }
                    html {
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                        overflow-x: hidden !important;
                        overflow-y: auto;
                        -webkit-overflow-scrolling: touch;
                    }
                    body:not(.auth-locked) {
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                        position: static !important;
                        overflow-x: hidden !important;
                        overflow-y: visible !important;
                        overscroll-behavior-y: auto;
                        touch-action: auto;
                        -webkit-overflow-scrolling: touch;
                    }
                    .main-content,
                    .sidebar:hover ~ .main-content {
                        box-sizing: border-box;
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                        contain: none !important;
                        overflow: visible !important;
                        padding-top: calc(0.85rem + env(safe-area-inset-top));
                        padding-left: max(var(--mobile-page-gutter), env(safe-area-inset-left));
                        padding-right: max(var(--mobile-page-gutter), env(safe-area-inset-right));
                        padding-bottom: calc(var(--mobile-nav-height) + 1rem + env(safe-area-inset-bottom));
                    }
                    .main-content > header,
                    .spa-view > .container,
                    .spa-view > section.card,
                    .spa-view > .card,
                    #view-main > .container,
                    #view-historico > section.card,
                    #view-evolucao > section.card,
                    #view-economias > .container,
                    #view-quarentena > .quarantine-grid {
                        box-sizing: border-box;
                        width: 100% !important;
                        max-width: min(100%, var(--mobile-content-max)) !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    @supports (width: 100svw) {
                        .main-content > header,
                        .spa-view > .container,
                        .spa-view > section.card,
                        .spa-view > .card,
                        #view-main > .container,
                        #view-historico > section.card,
                        #view-evolucao > section.card,
                        #view-economias > .container,
                        #view-quarentena > .quarantine-grid {
                            max-width: min(calc(100svw - 1.5rem), var(--mobile-content-max)) !important;
                        }
                    }
                    .container,
                    .forms-grid,
                    .summary-box,
                    .savings-grid,
                    .quarantine-grid,
                    #dashboard-column,
                    #forms-column,
                    #view-economias .container > div,
                    #view-economias section.card,
                    #savings-list,
                    #expense-list {
                        box-sizing: border-box;
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                        overflow: visible !important;
                    }
                    .card,
                    .summary-card,
                    .smart-alert-card,
                    .expense-item,
                    .saving-card,
                    .wish-item {
                        box-sizing: border-box;
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                    }
                    .main-content > header {
                        align-items: center;
                    }
                    .header-brand {
                        width: 100%;
                        max-width: 100%;
                        grid-template-columns: minmax(0, 132px) minmax(0, 1fr);
                    }
                    .header-brand .brand-logo-wrap,
                    .brand-logo-wrap {
                        justify-self: end;
                    }
                    .header-brand-title {
                        overflow-wrap: normal;
                        word-break: normal;
                    }
                    .header-actions,
                    .budget-control {
                        width: 100%;
                        max-width: 100%;
                    }
                    #view-historico section.card > div[style*="grid-template-columns"],
                    #view-historico section.card > div[style*="display:grid"] {
                        display: grid !important;
                        grid-template-columns: 1fr !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    #filter-category,
                    #filter-search,
                    #filter-from,
                    #filter-to,
                    #view-historico .flatpickr-input,
                    #view-historico .form-control,
                    #view-historico button {
                        display: block;
                        box-sizing: border-box;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .saving-card {
                        overflow: hidden;
                    }
                    .saving-header,
                    .saving-amounts,
                    .wish-header,
                    .wish-info,
                    .wish-footer,
                    .wish-actions,
                    .expense-details,
                    .expense-value {
                        width: 100%;
                        max-width: 100%;
                        min-width: 0;
                    }
                    .saving-amounts {
                        grid-template-columns: 1fr !important;
                        justify-items: start;
                        text-align: left;
                    }
                    input,
                    select,
                    textarea,
                    button,
                    .form-control,
                    .btn,
                    .picker-trigger {
                        box-sizing: border-box;
                        max-width: 100% !important;
                    }
                    .sidebar {
                        position: fixed !important;
                        top: auto !important;
                        left: 50% !important;
                        right: auto !important;
                        bottom: 0 !important;
                        width: calc(100% - 0.5rem) !important;
                        max-width: 520px !important;
                        min-width: 0 !important;
                        transform: translate3d(-50%, 0, 0) !important;
                        overflow: hidden !important;
                        overscroll-behavior: contain;
                        -webkit-overflow-scrolling: touch;
                    }
                    @supports (width: 100svw) {
                        .sidebar {
                            width: min(calc(100svw - 0.5rem), 520px) !important;
                        }
                    }
                    body.keyboard-open .sidebar {
                        transform: translate3d(-50%, calc(100% + env(safe-area-inset-bottom)), 0) !important;
                    }
                    .sidebar-nav {
                        width: 100% !important;
                        max-width: 100% !important;
                        min-width: 0 !important;
                    }
                    .sidebar-nav li a,
                    .sidebar:hover .sidebar-nav li a {
                        justify-content: center;
                    }
                    input,
                    select,
                    textarea {
                        font-size: 16px !important;
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

        installPageZoomLock();
        installMobileStability();
        installMobileViewPolish();
    }

    function installPageZoomLock() {
        if (window.__sdwPageZoomLockInstalled) return;
        window.__sdwPageZoomLockInstalled = true;

        const viewportContent = 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover';
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.setAttribute('name', 'viewport');
            document.head.prepend(viewport);
        }
        viewport.setAttribute('content', viewportContent);

        const blockZoom = (event) => {
            event.preventDefault();
        };

        const blockPinch = (event) => {
            if ((event.touches && event.touches.length > 1) || (event.scale && event.scale !== 1)) {
                event.preventDefault();
            }
        };

        let lastTouchEnd = 0;
        document.addEventListener('touchmove', blockPinch, { capture: true, passive: false });
        document.addEventListener('gesturestart', blockZoom, { capture: true, passive: false });
        document.addEventListener('gesturechange', blockZoom, { capture: true, passive: false });
        document.addEventListener('gestureend', blockZoom, { capture: true, passive: false });
        document.addEventListener('touchend', (event) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, { capture: true, passive: false });
        document.addEventListener('wheel', (event) => {
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
            }
        }, { capture: true, passive: false });
        document.addEventListener('keydown', (event) => {
            if (!(event.ctrlKey || event.metaKey)) return;
            if (['+', '=', '-', '_', '0'].includes(event.key)) {
                event.preventDefault();
            }
        }, true);
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

        function hasHorizontalDrift() {
            return Math.abs(window.scrollX || 0) > 0
                || Math.abs(document.documentElement?.scrollLeft || 0) > 0
                || Math.abs(document.body?.scrollLeft || 0) > 0;
        }

        function resetHorizontalScroll() {
            if (!hasHorizontalDrift()) return;
            window.scrollTo(0, window.scrollY);
            if (document.documentElement) document.documentElement.scrollLeft = 0;
            if (document.body) document.body.scrollLeft = 0;
        }

        function scheduleHorizontalClamp() {
            if (!isMobileWidth() || !hasHorizontalDrift()) return;
            window.requestAnimationFrame(resetHorizontalScroll);
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
                event.target.scrollIntoView?.({ block: 'center', inline: 'nearest', behavior: 'auto' });
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
        window.addEventListener('scroll', scheduleHorizontalClamp, { passive: true });
        window.addEventListener('pageshow', scheduleViewportSync, { passive: true });

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', scheduleViewportSync, { passive: true });
            window.visualViewport.addEventListener('scroll', scheduleHorizontalClamp, { passive: true });
        }

        if (mobileQuery.addEventListener) {
            mobileQuery.addEventListener('change', scheduleViewportSync);
        } else {
            mobileQuery.addListener(scheduleViewportSync);
        }

        syncViewportHeight();
        resetHorizontalScroll();
    }

    function installMobileViewPolish() {
        if (window.__sdwMobileViewPolishInstalled) return;
        window.__sdwMobileViewPolishInstalled = true;

        const setInputLabel = (id, label) => {
            const input = document.getElementById(id);
            if (!input) return;

            input.setAttribute('aria-label', label);
            input.setAttribute('placeholder', label);

            const flatpickrAlt = input._flatpickr?.altInput;
            if (flatpickrAlt) {
                flatpickrAlt.setAttribute('aria-label', label);
                flatpickrAlt.setAttribute('placeholder', label);
                return;
            }

            const next = input.nextElementSibling;
            if (next?.classList?.contains('flatpickr-input')) {
                next.setAttribute('aria-label', label);
                next.setAttribute('placeholder', label);
            }
        };

        const syncActiveView = () => {
            const active = document.querySelector('.spa-view.active');
            document.body.dataset.activeView = active?.id || 'view-main';
        };

        const applyPolish = () => {
            setInputLabel('filter-from', 'Data inicial');
            setInputLabel('filter-to', 'Data final');
            syncActiveView();
        };

        const observer = new MutationObserver(applyPolish);
        document.querySelectorAll('.spa-view').forEach(view => {
            observer.observe(view, { attributes: true, attributeFilter: ['class'] });
        });

        document.addEventListener('click', () => window.setTimeout(applyPolish, 0), true);
        window.addEventListener('pageshow', applyPolish, { passive: true });
        window.setTimeout(applyPolish, 250);
        window.setTimeout(applyPolish, 1000);
        applyPolish();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyBrandUpdate);
    } else {
        applyBrandUpdate();
    }
})();
