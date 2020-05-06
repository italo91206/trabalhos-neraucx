require(['jquery'], function (jQuery) {
        jQuery(document).ready(function ($) {
            
            function loadPost(post) {
                jQuery('#recent_container').append(`<div class="post">
                    <img src="" id="featured`+ post.id + `" alt="" class="featured" />
                    <div id="title" class="title">`+ post.title.rendered + `</div>
                    <div id="content" class="content">`+ post.excerpt.rendered + `</div>
                    <div class="action">
                    <a href="`+ post.link + `" target="_blank" class="see_more">See more</a>
                    </div>
                    </div>`);
                jQuery.get(post._links['wp:featuredmedia'][0].href, function (mediaData, status) {
                    jQuery('#featured' + post.id).attr('src', mediaData.source_url);
                });
            }
            
            jQuery.get('https://blog.soncocrowdcontrol.com/wp-json/wp/v2/posts?tag=172', function (data, status) {
                var posts = data;
                if (posts[0]) {
                    var last = posts[0];
                    jQuery('#last_container').append(`<div class="post">
                        <img src="" id="featured`+ last.id + `" alt="" class="featured" />
                            <div id="title" class="title">`+ last.title.rendered + `</div>
                            <div id="content" class="content">`+ last.excerpt.rendered + `</div>
                            <div class="action">
                            <a href="`+ last.link + `" target="_blank" class="see_more">See more</a>
                            </div>
                        </div>`);
                    jQuery.get(last._links['wp:featuredmedia'][0].href, function (mediaData, status) {
                        jQuery('#featured' + last.id).attr('src', mediaData.source_url);
                    });
                }

                for (var i = 1; i <= 4; i++) {
                    if (posts[i]) {
                        var post = posts[i];
                        loadPost(post);
                    }
                }
            });
            
        });
    });