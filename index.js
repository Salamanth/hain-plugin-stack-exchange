'use strict';

module.exports = (pluginContext) => {
    const shell = pluginContext.shell;
    const sites = [
        {
            title:"Stack Overflow",
            slug:"stackoverflow",
            url:"http://stackoverflow.com/",
        },{
            title:"Super User",
            slug:"superuser",
            url:"http://superuser.com/",
        },{
            title:"Ask Ubuntu",
            slug:"askubuntu",
            url:"http://askubuntu.com/"
        },{
            title:"Server Fault",
            slug:"serverfault",
            url:"http://serverfault.com/"
        },{
            title:"English Language & Usage",
            slug:"english",
            url:"http://english.stackexchange.com/"
        },{
            title:"Unix & Linux",
            slug:"unix",
            url:"http://unix.stackexchange.com/"
        },{
            title:"Arqade",
            slug:"gaming",
            url:"http://gaming.stackexchange.com/"
        },{
            title:"Ask Different",
            slug:"apple",
            url:"http://apple.stackexchange.com/"
        },{
            title:"Mathematics",
            slug:"math",
            url:"http://math.stackexchange.com/"
        },{
            title:"Android Enthusiasts",
            slug:"android",
            url:"http://android.stackexchange.com/"
        },{
            title:"Database Administrators",
            slug:"dba",
            url:"http://dba.stackexchange.com/"
        // },{
        //     title:"Seasoned Advice",
        //     slug:"cooking",
        //     url:"http://cooking.stackexchange.com/"
        // },{
        //     title:"Home Improvement",
        //     slug:"diy",
        //     url:"http://diy.stackexchange.com/"
        // },{
        //     title:"TeX - LaTeX",
        //     slug:"tex",
        //     url:"http://tex.stackexchange.com/"
        // },{
        //     title:"Electrical Engineering",
        //     slug:"electronics",
        //     url:"http://electronics.stackexchange.com/"
        // },{
        //     title:"Cross Validated",
        //     slug:"stats",
        //     url:"http://stats.stackexchange.com/"
        // },{
        //     title:"Programmers",
        //     slug:"programmers",
        //     url:"http://programmers.stackexchange.com/"
        // },{
        //     title:"Graphic Design",
        //     slug:"graphicdesign",
        //     url:"http://graphicdesign.stackexchange.com/"
        // },{
        //     title:"Physics",
        //     slug:"physics",
        //     url:"http://physics.stackexchange.com/"
        // },{
        //     title:"Information Security",
        //     slug:"security",
        //     url:"http://security.stackexchange.com/"
        // },{
        //     title:"Science Fiction & Fantasy",
        //     slug:"scifi",
        //     url:"http://scifi.stackexchange.com/"
        // },{
        //     title:"SharePoint",
        //     slug:"sharepoint",
        //     url:"http://sharepoint.stackexchange.com/"
        // },{
        //     title:"Stack Overflow на русском",
        //     slug:"ru",
        //     url:"http://ru.stackoverflow.com/"
        // },{
        //     title:"Geographic Information Systems",
        //     slug:"gis",
        //     url:"http://gis.stackexchange.com/"
        // },{
        //     title:"Code Review",
        //     slug:"codereview",
        //     url:"http://codereview.stackexchange.com/"
        // },{
        //     title:"Web Applications",
        //     slug:"webapps",
        //     url:"http://webapps.stackexchange.com/"
        // },{
        //     title:"English Language Learners",
        //     slug:"ell",
        //     url:"http://ell.stackexchange.com/"
        // },{
        //     title:"WordPress Development",
        //     slug:"wordpress",
        //     url:"http://wordpress.stackexchange.com/"
        // },{
        //     title:"Motor Vehicle Maintenance & Repair",
        //     slug:"mechanics",
        //     url:"http://mechanics.stackexchange.com/"
        // },{
        //     title:"Magento",
        //     slug:"magento",
        //     url:"http://magento.stackexchange.com/"
        // },{
        //     title:"Travel",
        //     slug:"travel",
        //     url:"http://travel.stackexchange.com/"
        // },{
        //     title:"Raspberry Pi",
        //     slug:"raspberrypi",
        //     url:"http://raspberrypi.stackexchange.com/"
        // },{
        //     title:"The Workplace",
        //     slug:"workplace",
        //     url:"http://workplace.stackexchange.com/"
        // },{
        //     title:"Movies & TV",
        //     slug:"movies",
        //     url:"http://movies.stackexchange.com/"
        },
    ]

    function search(query, res) {
        const query_trim = query.trim();
        if (query_trim.length == 0) {
            return;
        }
        sites.forEach((site) => {
            res.add({
                id: query_trim,
                payload: site.slug,
                title: 'Search ' + query_trim,
                // icon: '/img/' + site.slug + '.png',
                desc: 'Search on ' + site.title
            });
        });
    }

    function execute(id, payload) {
        sites.forEach((site) => {
            if (payload == site.slug) {
                shell.openExternal(site.url + `search?q=${id}`);
                return;
            }
        });
    }

    return {search, execute};
};
