<competition-past-matches>
  <loading></loading>
  <matches matches={ matches } if={ matches }></matches>

  <script type="coffee">
    util = require 'util'

    @on 'mount', () =>
      season_id = @parent.competition.season.season_id

      util.request @, '/season/' + season_id + '/matches/past/10', (matches) =>
        @matches = matches
        @update()
  </script>

  <style type="scss">
    @import 'app/support.scss';

  </style>
</competition-past-matches>
