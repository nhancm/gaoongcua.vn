var data = {
    view: {
        isHomepage: "<b:if cond='data:view.isHomepage'>true</b:if>",
        isArchive: "<b:if cond='data:view.isArchive'>true</b:if>",
        isPost: "<b:if cond='data:view.isPost'>true</b:if>",
        isPage: "<b:if cond='data:view.isPage'>true</b:if>",
        isSearch: "<b:if cond='data:view.isSearch and !data:view.search.label and !data:view.search.query'>true</b:if>",
        isLabelSearch: "<b:if cond='data:view.search.label'>true</b:if>",
        isSearchQuery: "<b:if cond='data:view.search.query'>true</b:if>",
        isMultipleItems: "<b:if cond='data:view.isMultipleItems'>true</b:if>",
        isSingleItem: "<b:if cond='data:view.isSingleItem'>true</b:if>",
        isMobile: "<b:if cond='data:blog.isMobileRequest'>true</b:if>"
    },
    blog: {
        blogId: "<data:blog.blogId/>",
        postId: "<b:if cond='data:view.isPost'><data:blog.postId/></b:if>",
        pageId: "<b:if cond='data:view.isPage'><data:blog.pageId/></b:if>",
        pageName: "<b:if cond='data:blog.pageName'><data:blog.pageName/></b:if>",
        searchqueryescaped: "<b:if cond='data:view.search.query'><data:view.search.query.escaped/></b:if>",
        homepageUrl: "<data:blog.canonicalHomepageUrl/>",
        url: "<data:blog.canonicalUrl/>",
        analyticsAccountNumber: "<data:blog.analyticsAccountNumber/>",
        clientid: "",
        searchindex: 500
    },
    messages: {
        home: "<data:messages.home/>",
        linkCopiedToClipboard: "<data:messages.linkCopiedToClipboard/>",
        share: "<data:messages.share/>",
        shareheader: "Chia sẻ nội dung này qua",
        copy: "Sao chép liên kết",
        facebook: "<b:eval expr='data:blog.sharing.platforms[1].shareMessage'/>",
        twitter: "<b:eval expr='data:blog.sharing.platforms[3].shareMessage'/>",
        pinterest: "<b:eval expr='data:blog.sharing.platforms[4].shareMessage'/>",
        linkedin: "Chia sẻ với Linkedin",
        email: "Gửi bài qua Email",
        close: "Đóng"
    }
}