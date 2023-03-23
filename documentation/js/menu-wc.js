'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tutorial-nest-js documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-80fbc72d8fe465f9dda009ab6cbfe0cffa06d0f20946da9c19592f734fde463f359db312287b723c831df5a5ce66e8c58a0c911f81e81ff76dd641e9c183328b"' : 'data-target="#xs-controllers-links-module-AppModule-80fbc72d8fe465f9dda009ab6cbfe0cffa06d0f20946da9c19592f734fde463f359db312287b723c831df5a5ce66e8c58a0c911f81e81ff76dd641e9c183328b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-80fbc72d8fe465f9dda009ab6cbfe0cffa06d0f20946da9c19592f734fde463f359db312287b723c831df5a5ce66e8c58a0c911f81e81ff76dd641e9c183328b"' :
                                            'id="xs-controllers-links-module-AppModule-80fbc72d8fe465f9dda009ab6cbfe0cffa06d0f20946da9c19592f734fde463f359db312287b723c831df5a5ce66e8c58a0c911f81e81ff76dd641e9c183328b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-80fbc72d8fe465f9dda009ab6cbfe0cffa06d0f20946da9c19592f734fde463f359db312287b723c831df5a5ce66e8c58a0c911f81e81ff76dd641e9c183328b"' : 'data-target="#xs-injectables-links-module-AppModule-80fbc72d8fe465f9dda009ab6cbfe0cffa06d0f20946da9c19592f734fde463f359db312287b723c831df5a5ce66e8c58a0c911f81e81ff76dd641e9c183328b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-80fbc72d8fe465f9dda009ab6cbfe0cffa06d0f20946da9c19592f734fde463f359db312287b723c831df5a5ce66e8c58a0c911f81e81ff76dd641e9c183328b"' :
                                        'id="xs-injectables-links-module-AppModule-80fbc72d8fe465f9dda009ab6cbfe0cffa06d0f20946da9c19592f734fde463f359db312287b723c831df5a5ce66e8c58a0c911f81e81ff76dd641e9c183328b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-87bd106b85be8fe449cb1ab41797d3579838dedf765708442d91be60ea536a2c26e37ae39006bcc741f69dd9398f608a7b18854eeb7d88879b82850377ce12e4"' : 'data-target="#xs-injectables-links-module-AuthModule-87bd106b85be8fe449cb1ab41797d3579838dedf765708442d91be60ea536a2c26e37ae39006bcc741f69dd9398f608a7b18854eeb7d88879b82850377ce12e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-87bd106b85be8fe449cb1ab41797d3579838dedf765708442d91be60ea536a2c26e37ae39006bcc741f69dd9398f608a7b18854eeb7d88879b82850377ce12e4"' :
                                        'id="xs-injectables-links-module-AuthModule-87bd106b85be8fe449cb1ab41797d3579838dedf765708442d91be60ea536a2c26e37ae39006bcc741f69dd9398f608a7b18854eeb7d88879b82850377ce12e4"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksModule.html" data-type="entity-link" >BooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BooksModule-5267289fee2ea06bbf7a3a54a358e6586fd5c90e8c84a2042a7144afa30cc9a6feba6feb8e3b763bd86acda031f935a17a6a0e6454282f6b4ae30e487f3f16bc"' : 'data-target="#xs-controllers-links-module-BooksModule-5267289fee2ea06bbf7a3a54a358e6586fd5c90e8c84a2042a7144afa30cc9a6feba6feb8e3b763bd86acda031f935a17a6a0e6454282f6b4ae30e487f3f16bc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BooksModule-5267289fee2ea06bbf7a3a54a358e6586fd5c90e8c84a2042a7144afa30cc9a6feba6feb8e3b763bd86acda031f935a17a6a0e6454282f6b4ae30e487f3f16bc"' :
                                            'id="xs-controllers-links-module-BooksModule-5267289fee2ea06bbf7a3a54a358e6586fd5c90e8c84a2042a7144afa30cc9a6feba6feb8e3b763bd86acda031f935a17a6a0e6454282f6b4ae30e487f3f16bc"' }>
                                            <li class="link">
                                                <a href="controllers/BooksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BooksModule-5267289fee2ea06bbf7a3a54a358e6586fd5c90e8c84a2042a7144afa30cc9a6feba6feb8e3b763bd86acda031f935a17a6a0e6454282f6b4ae30e487f3f16bc"' : 'data-target="#xs-injectables-links-module-BooksModule-5267289fee2ea06bbf7a3a54a358e6586fd5c90e8c84a2042a7144afa30cc9a6feba6feb8e3b763bd86acda031f935a17a6a0e6454282f6b4ae30e487f3f16bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BooksModule-5267289fee2ea06bbf7a3a54a358e6586fd5c90e8c84a2042a7144afa30cc9a6feba6feb8e3b763bd86acda031f935a17a6a0e6454282f6b4ae30e487f3f16bc"' :
                                        'id="xs-injectables-links-module-BooksModule-5267289fee2ea06bbf7a3a54a358e6586fd5c90e8c84a2042a7144afa30cc9a6feba6feb8e3b763bd86acda031f935a17a6a0e6454282f6b4ae30e487f3f16bc"' }>
                                        <li class="link">
                                            <a href="injectables/BooksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BooksController.html" data-type="entity-link" >BooksController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BooksController-1.html" data-type="entity-link" >BooksController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Book.html" data-type="entity-link" >Book</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookDto.html" data-type="entity-link" >BookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigService.html" data-type="entity-link" >ConfigService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookDto.html" data-type="entity-link" >CreateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBookDto.html" data-type="entity-link" >UpdateBookDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});