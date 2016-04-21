'use strict';

import notify from 'gulp-notify';

export default function(err) {
    notify.onError({
        title: 'Gulp',
        subtitle: 'Failure!',
        message: 'Error: <%= error.message %>',
        sound: 'Pop'
    })(err);

    this.emit('end');
};
