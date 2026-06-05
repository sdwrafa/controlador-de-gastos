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
                @media (max-width: 900px) {
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
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyBrandUpdate);
    } else {
        applyBrandUpdate();
    }
})();
