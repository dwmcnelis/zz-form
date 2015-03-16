`import Ember from 'ember'`

ScrollTop =
    name: 'scroll-top'
    initialize: () ->
        Ember.Route.reopen
            renderTemplate: ->
                @_super()
                $("html, body").animate({ scrollTop: 0 }, "fast");

`export default ScrollTop`
