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
                    <a href="index.html" data-type="index-link">first-mongodb-project documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-24a0019e763ddaa9cb1730532ba96512f29a54035c50567b93242fe91e7dd68e1301f765e5d8cc4776dbfce6d36bbdf1d0bbfa36e122b1c0bad77fabd21f7545"' : 'data-bs-target="#xs-controllers-links-module-AppModule-24a0019e763ddaa9cb1730532ba96512f29a54035c50567b93242fe91e7dd68e1301f765e5d8cc4776dbfce6d36bbdf1d0bbfa36e122b1c0bad77fabd21f7545"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-24a0019e763ddaa9cb1730532ba96512f29a54035c50567b93242fe91e7dd68e1301f765e5d8cc4776dbfce6d36bbdf1d0bbfa36e122b1c0bad77fabd21f7545"' :
                                            'id="xs-controllers-links-module-AppModule-24a0019e763ddaa9cb1730532ba96512f29a54035c50567b93242fe91e7dd68e1301f765e5d8cc4776dbfce6d36bbdf1d0bbfa36e122b1c0bad77fabd21f7545"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-24a0019e763ddaa9cb1730532ba96512f29a54035c50567b93242fe91e7dd68e1301f765e5d8cc4776dbfce6d36bbdf1d0bbfa36e122b1c0bad77fabd21f7545"' : 'data-bs-target="#xs-injectables-links-module-AppModule-24a0019e763ddaa9cb1730532ba96512f29a54035c50567b93242fe91e7dd68e1301f765e5d8cc4776dbfce6d36bbdf1d0bbfa36e122b1c0bad77fabd21f7545"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-24a0019e763ddaa9cb1730532ba96512f29a54035c50567b93242fe91e7dd68e1301f765e5d8cc4776dbfce6d36bbdf1d0bbfa36e122b1c0bad77fabd21f7545"' :
                                        'id="xs-injectables-links-module-AppModule-24a0019e763ddaa9cb1730532ba96512f29a54035c50567b93242fe91e7dd68e1301f765e5d8cc4776dbfce6d36bbdf1d0bbfa36e122b1c0bad77fabd21f7545"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-6b4723e248ad15f06969e2cc5ac4b5d72d54490ed3f61ae03ce13fa73a52a614c28b1ddff2e6f14d7b4983e54aed229a33563ac4c4aca67ff05d3d39c395cba9"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-6b4723e248ad15f06969e2cc5ac4b5d72d54490ed3f61ae03ce13fa73a52a614c28b1ddff2e6f14d7b4983e54aed229a33563ac4c4aca67ff05d3d39c395cba9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-6b4723e248ad15f06969e2cc5ac4b5d72d54490ed3f61ae03ce13fa73a52a614c28b1ddff2e6f14d7b4983e54aed229a33563ac4c4aca67ff05d3d39c395cba9"' :
                                            'id="xs-controllers-links-module-AuthModule-6b4723e248ad15f06969e2cc5ac4b5d72d54490ed3f61ae03ce13fa73a52a614c28b1ddff2e6f14d7b4983e54aed229a33563ac4c4aca67ff05d3d39c395cba9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-6b4723e248ad15f06969e2cc5ac4b5d72d54490ed3f61ae03ce13fa73a52a614c28b1ddff2e6f14d7b4983e54aed229a33563ac4c4aca67ff05d3d39c395cba9"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-6b4723e248ad15f06969e2cc5ac4b5d72d54490ed3f61ae03ce13fa73a52a614c28b1ddff2e6f14d7b4983e54aed229a33563ac4c4aca67ff05d3d39c395cba9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6b4723e248ad15f06969e2cc5ac4b5d72d54490ed3f61ae03ce13fa73a52a614c28b1ddff2e6f14d7b4983e54aed229a33563ac4c4aca67ff05d3d39c395cba9"' :
                                        'id="xs-injectables-links-module-AuthModule-6b4723e248ad15f06969e2cc5ac4b5d72d54490ed3f61ae03ce13fa73a52a614c28b1ddff2e6f14d7b4983e54aed229a33563ac4c4aca67ff05d3d39c395cba9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-8e5a3eedb242fd4dcb9f1cff372f817e0ac72e574bdabc6f4b27b74d729176f1075556f6e73c5656e379351eb354840339fa7c36a22f7d02ebefe197375cf0b9"' : 'data-bs-target="#xs-controllers-links-module-PostModule-8e5a3eedb242fd4dcb9f1cff372f817e0ac72e574bdabc6f4b27b74d729176f1075556f6e73c5656e379351eb354840339fa7c36a22f7d02ebefe197375cf0b9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-8e5a3eedb242fd4dcb9f1cff372f817e0ac72e574bdabc6f4b27b74d729176f1075556f6e73c5656e379351eb354840339fa7c36a22f7d02ebefe197375cf0b9"' :
                                            'id="xs-controllers-links-module-PostModule-8e5a3eedb242fd4dcb9f1cff372f817e0ac72e574bdabc6f4b27b74d729176f1075556f6e73c5656e379351eb354840339fa7c36a22f7d02ebefe197375cf0b9"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-8e5a3eedb242fd4dcb9f1cff372f817e0ac72e574bdabc6f4b27b74d729176f1075556f6e73c5656e379351eb354840339fa7c36a22f7d02ebefe197375cf0b9"' : 'data-bs-target="#xs-injectables-links-module-PostModule-8e5a3eedb242fd4dcb9f1cff372f817e0ac72e574bdabc6f4b27b74d729176f1075556f6e73c5656e379351eb354840339fa7c36a22f7d02ebefe197375cf0b9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-8e5a3eedb242fd4dcb9f1cff372f817e0ac72e574bdabc6f4b27b74d729176f1075556f6e73c5656e379351eb354840339fa7c36a22f7d02ebefe197375cf0b9"' :
                                        'id="xs-injectables-links-module-PostModule-8e5a3eedb242fd4dcb9f1cff372f817e0ac72e574bdabc6f4b27b74d729176f1075556f6e73c5656e379351eb354840339fa7c36a22f7d02ebefe197375cf0b9"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-f2a0a528460fdf16d8932ecaf8fc05a52b5eef5dc4be616890e82848199d6f978e95b739f87d17e60af2b35bd67521f693cfb0a4d31b789ad319d291fb604646"' : 'data-bs-target="#xs-controllers-links-module-UserModule-f2a0a528460fdf16d8932ecaf8fc05a52b5eef5dc4be616890e82848199d6f978e95b739f87d17e60af2b35bd67521f693cfb0a4d31b789ad319d291fb604646"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-f2a0a528460fdf16d8932ecaf8fc05a52b5eef5dc4be616890e82848199d6f978e95b739f87d17e60af2b35bd67521f693cfb0a4d31b789ad319d291fb604646"' :
                                            'id="xs-controllers-links-module-UserModule-f2a0a528460fdf16d8932ecaf8fc05a52b5eef5dc4be616890e82848199d6f978e95b739f87d17e60af2b35bd67521f693cfb0a4d31b789ad319d291fb604646"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-f2a0a528460fdf16d8932ecaf8fc05a52b5eef5dc4be616890e82848199d6f978e95b739f87d17e60af2b35bd67521f693cfb0a4d31b789ad319d291fb604646"' : 'data-bs-target="#xs-injectables-links-module-UserModule-f2a0a528460fdf16d8932ecaf8fc05a52b5eef5dc4be616890e82848199d6f978e95b739f87d17e60af2b35bd67521f693cfb0a4d31b789ad319d291fb604646"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-f2a0a528460fdf16d8932ecaf8fc05a52b5eef5dc4be616890e82848199d6f978e95b739f87d17e60af2b35bd67521f693cfb0a4d31b789ad319d291fb604646"' :
                                        'id="xs-injectables-links-module-UserModule-f2a0a528460fdf16d8932ecaf8fc05a52b5eef5dc4be616890e82848199d6f978e95b739f87d17e60af2b35bd67521f693cfb0a4d31b789ad319d291fb604646"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post-1.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-1.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});