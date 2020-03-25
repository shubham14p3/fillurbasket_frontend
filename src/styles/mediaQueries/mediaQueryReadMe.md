Generator allows you to create custom media-queries mixins by passing keywords arguments based on w3c media features specification (make sure you always provide key and value).

It's also a syntactic sugar for the standard media queries syntax (CSS).

Examples:

@include mq(\$max-width: 1000px) {
...
}

// will generate

@media only screen and (max-width: 1000px) {
...
}
Creating new mixins (like max-screen) is even easier:

@mixin max-screen($max)
  @include mq($max-width: \$max) {
@content;
}
}

// usage

@include max-screen(1000px) {
...
}

// will generate

@media only screen and (max-width: 1000px) {
...
}
Or if you want to change \$media-type and other properies:

@mixin custom-device($min, $max)
@include mq($media-type: 'all', $min-width: $min, $max-width: \$max) {
@content;
}
}

// usage

@include custom-device(500px, 1000px) {
...
}

// will generate

@media all and (min-width: 500px) and (max-width: 1000px) {
...
}
How cool is that?

Other Mixins:
@ screen(min-width, max-width, orientation)
@ min-screen(width)
@ max-screen(width)
--
@ screen-height(min-height, max-height, orientation)
@ min-screen-height(height)
@ max-screen-height(height)
--
@ hdpi(ratio)
--
@ landscape
@ portrait
--
@ iphone4(orientation)
@ iphone5(orientation)
@ iphone6(orientation)
@ iphone6-plus(orientation)
--
@ ipad(orientation)
@ ipad-retina(orientation)
--
@ hdtv(standard)

- screen($min-width, $max-width, \$orientation: false)
  It targets group of devices or just one with particular screen width and orientation (optional).

# Example:

@include screen(320px, 640px) { ... }
@include screen(768px, 1024px, landscape) { ... }
It will be compiled to:

@media screen and (min-width: 768px) and (max-width: 1280px) { ... }
@media screen and (min-width: 320px) and (max-width: 640px) and (orientation: landscape) { ... }

- min-screen(\$width)
  It's a shortcut for @media screen and (min-width ... )

# Example:

@include min-screen(768px) { ... }
@include min-screen(1024px) { ... }
It will be compiled to:

@media screen and (min-width: 768px) { ... }
@media screen and (min-width: 1024px) { ... }

- max-screen(\$width)
  It's a shortcut for @media screen and (max-width ... )

# Example:

@include max-screen(1024px) { ... }
@include max-screen(768px) { ... }
It will be compiled to:

@media screen and (max-width: 1024px) { ... }
@media screen and (max-width: 768px) { ... }

- screen-height($min-height, $max-height, \$orientation: false)
  It targets group of devices or just one with particular screen height and orientation (optional).

# Example:

@include screen-height(640px, 768px) { ... }
@include screen-height(640px, 768px, landscape) { ... }
It will be compiled to:

@media screen and (min-height: 768px) and (max-height: 1280px) { ... }
@media screen and (min-height: 768px) and (max-height: 1280px) and (orientation: landscape) { ... }

- min-screen-height(\$width)
  It's a shortcut for @media screen and (min-height ... )

# Example:

@include min-screen-height(768px) { ... }
@include min-screen-height(1024px) { ... }
It will be compiled to:

@media screen and (min-height: 768px) { ... }
@media screen and (min-height: 1024px) { ... }

- max-screen-height(\$width)
  It's a shortcut for @media screen and (max-height ... )

# Example:

@include max-screen-height(1024px) { ... }
@include max-screen-height(768px) { ... }
It will be compiled to:

@media screen and (max-height: 1024px) { ... }
@media screen and (max-height: 768px) { ... }

- hdpi(\$ratio: 1.3)
  It targets devices with hdpi display.

# Example:

.brand {
background-image: url(logo.png);

    @include hdpi {
    	background-image: url(logo_2x.png);
    }

}

- landscape() & portrait()
  Both mixins target different screen orientations.

# Example:

@include landscape { ... }
@include portrait { ... }
It will be compiled to:

@media screen and (orientation: landscape) { ... }
@media screen and (orientation: portrait) { ... }
\$orientation: all | portrait | landscape

- iphone4(\$orientation: all)
  It targets only iPhone 4 + orientation

- iphone5(\$orientation: all)
  It targets only iPhone 5 + orientation

- iphone6(\$orientation: all)
  It targets only iPhone 6 + orientation

- iphone6-plus(\$orientation: all)
  It targets only iPhone 6 Plus + orientation

- ipad(\$orientation: all)
  It targets all iPads + orientation

- ipad-retina(\$orientation: all)
  It targets only iPads with retina display + orientation

# Example:

@include ipad { ... } // all iPads
@include ipad-retina { ... } // only iPad with retina

@include iphone5 { ... } // only iPhone 5
@include iphone4 { ... } // only iPhone 4/4S

# Example:

// common part for iPhone 5 - landscape & portrait
@include iphone5 { ... }

@include iphone5(landscape) { ... }
@include iphone5(portrait) { ... }
\$standard: '720p' | '1080' | '2K' | '4K'

- hdtv(\$standard: '1080')
  It targets TVs with particular standard like 1080 or 4K

# Example:

.title {
font-size: 5vm;

    @include hdtv {
    	font-size: 10vm;
    }

    @include hdtv('4K') {
    	font-size: 15vm;
    }

}
