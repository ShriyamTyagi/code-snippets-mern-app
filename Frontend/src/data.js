export const Code_Snippets = [
  {
    title: "express post method example",
    code: `<div><span style="color: rgb(0, 0, 0);">router.post(&apos;/books/add&apos;,&nbsp;async&nbsp;(req,&nbsp;res)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;book&nbsp;=&nbsp;await&nbsp;Book.add(Object.assign({&nbsp;userId:&nbsp;req.user.id&nbsp;},&nbsp;req.body));</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json(book);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(err)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.error(err);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json({&nbsp;error:&nbsp;err.message&nbsp;||&nbsp;err.toString()&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <p>
      </p>
      <p>
      </p>`,
    source:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/admin.js#L7",
  },
  {
    title: "express use method example",
    code: `<div><span style="color: rgb(0, 0, 0);">router.use((req,&nbsp;res,&nbsp;next)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!req.user&nbsp;||&nbsp;!req.user.isAdmin)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.status(401).json({&nbsp;error:&nbsp;&apos;Unauthorized&apos;&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next();</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span><br>
      </p>
      `,
    source:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/admin.js#L7",
  },
  {
    title: "express get method example",
    code: `<div><span style="color: rgb(0, 0, 0);">router.get(&apos;/books&apos;,&nbsp;async&nbsp;(req,&nbsp;res)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;books&nbsp;=&nbsp;await&nbsp;Book.list();</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json(books);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(err)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json({&nbsp;error:&nbsp;err.message&nbsp;||&nbsp;err.toString()&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>`,
    source:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/admin.js#L7",
  },
  {
    title: "express post method example",
    code: `<div><span style="color: rgb(0, 0, 0);">router.post(&apos;/torrents/delete&apos;,&nbsp;(req,&nbsp;res)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;{deleteData,&nbsp;hash:&nbsp;hashes}&nbsp;=&nbsp;req.body;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;callback&nbsp;=&nbsp;ajaxUtil.getResponseFn(res);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;req.services.clientGatewayService</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.removeTorrents({hashes,&nbsp;deleteData})</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then(callback)</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.catch(err&nbsp;=&gt;&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback(null,&nbsp;err);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>
      `,
    source:
      "https://github.com/Flood-UI/flood/blob/bb553506a86225811a965563af99bf8e39cc433f/server/routes/client.js#L86",
  },
  {
    title: "express use method example",
    code: `<div><span style="color: rgb(0, 0, 0);">app.use(serveStatic(path.join(__dirname,&nbsp;&apos;../playground&apos;),&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastModified:&nbsp;false,</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;etag:&nbsp;false,</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setHeaders:&nbsp;(res,&nbsp;url)&nbsp;=&gt;&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(url.indexOf(&apos;/index.html&apos;)&nbsp;!==&nbsp;-1)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.setHeader(&apos;Cache-Control&apos;,&nbsp;&apos;no-cache&apos;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}));</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>
      `,
    source:
      "https://github.com/cube-js/cube.js/blob/8d9eb688ba55d8821bebaf2a23fbb3addf93ab84/packages/cubejs-server-core/core/DevServer.js#L253",
  },
  {
    title: "express get method example",
    code: `<div><span style="color: rgb(0, 0, 0);">router.get(&apos;/rooms&apos;,&nbsp;[User.isAuthenticated,&nbsp;function(req,&nbsp;res,&nbsp;next)&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room.find(function(err,&nbsp;rooms){</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(err)&nbsp;throw&nbsp;err;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.render(&apos;rooms&apos;,&nbsp;{&nbsp;rooms&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}]);</span></div>
      
      <p><br>
      </p>
      `,
    source:
      "https://github.com/OmarElGabry/chat.io/blob/082952e527a2f47f46341e0a6636f29d140c2abf/app/routes/index.js#L78",
  },
  {
    title: "express get method example",
    code: `<div><span style="color: rgb(0, 0, 0);">router.get(&apos;/books/detail/:slug&apos;,&nbsp;async&nbsp;(req,&nbsp;res)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;book&nbsp;=&nbsp;await&nbsp;Book.getBySlug({&nbsp;slug:&nbsp;req.params.slug&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json(book);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(err)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json({&nbsp;error:&nbsp;err.message&nbsp;||&nbsp;err.toString()&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <p><br>
      </p>
      `,
    source:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/admin.js#L7",
  },
  {
    title: "express get method example",
    code: `<div><span style="color: rgb(0, 0, 0);">app.get(&apos;/&apos;,&nbsp;(req,&nbsp;res)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.header(&apos;Content-type&apos;,&nbsp;&apos;text/html&apos;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;res.end(&apos;&lt;h1&gt;DANCING&nbsp;DANCING&nbsp;STARLIGHT&lt;/h1&gt;&apos;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <p><br>
      </p>
      `,
    source:
      "https://github.com/lando/lando/blob/c53a5e5f17a04764ddb2d5a68a104591f094c2f1/examples/node12/src/app-custom.js#L24",
  },
  {
    title: "express get method example",
    code: `<div><span style="color: rgb(0, 0, 0);">router.get(&apos;/books&apos;,&nbsp;async&nbsp;(req,&nbsp;res)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;books&nbsp;=&nbsp;await&nbsp;Book.list();</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json(books);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(err)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json({&nbsp;error:&nbsp;err.message&nbsp;||&nbsp;err.toString()&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <p><br>
      </p>
      `,
    source:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/admin.js#L7",
  },
  {
    title: "express post method example",
    code: `<div><span style="color: rgb(0, 0, 0);">router.post(&apos;/books/add&apos;,&nbsp;async&nbsp;(req,&nbsp;res)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;book&nbsp;=&nbsp;await&nbsp;Book.add(Object.assign({&nbsp;userId:&nbsp;req.user.id&nbsp;},&nbsp;req.body));</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json(book);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(err)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.error(err);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json({&nbsp;error:&nbsp;err.message&nbsp;||&nbsp;err.toString()&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <p><br>
      </p>
      `,
    source:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/admin.js#L7",
  },
  {
    title: "express get method example",
    code: `<div><span style="color: rgb(0, 0, 0);">router.get(&apos;/books/detail/:slug&apos;,&nbsp;async&nbsp;(req,&nbsp;res)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;book&nbsp;=&nbsp;await&nbsp;Book.getBySlug({&nbsp;slug:&nbsp;req.params.slug&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json(book);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(err)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.json({&nbsp;error:&nbsp;err.message&nbsp;||&nbsp;err.toString()&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <p><br>
      </p>
      `,
    source:
      "https://github.com/async-labs/builderbook/blob/9cfdad446c3b8d78a1780092a8e0490a4e9948a0/book/5-end/server/api/admin.js#L7",
  },
  {
    title: "java CRFTokenizer example",
    code: `<div><span style="color: rgb(0, 0, 0);">CRFTokenizer&nbsp;(&nbsp;text&nbsp;)&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;CRFSegment&nbsp;=&nbsp;java.newInstanceSync(&apos;com.hankcs.hanlp.seg.CRF.CRFSegment&apos;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;words&nbsp;=&nbsp;CRFSegment.segSync(&nbsp;text&nbsp;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;&nbsp;JSON.parse(&nbsp;Gson.toJsonSync(words)&nbsp;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>
      `,
    source:
      "https://github.com/beyai/node-hanlp/blob/26a5fd0662662909fc70d4a0bb080691c7a3e351/lib/index.js#L91",
  },
  {
    title: "java ShortSegment example",
    code: `<div><span style="color: rgb(0, 0, 0);">ShortSegment&nbsp;(&nbsp;text&nbsp;)&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;opts&nbsp;=&nbsp;this.options,</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ShortSegment&nbsp;=&nbsp;java.newInstanceSync(&apos;com.hankcs.hanlp.seg.Dijkstra.DijkstraSegment&apos;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;words&nbsp;=&nbsp;ShortSegment.segSync(&nbsp;text&nbsp;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;&nbsp;JSON.parse(&nbsp;Gson.toJsonSync(words)&nbsp;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>
      `,
    source:
      "https://github.com/beyai/node-hanlp/blob/26a5fd0662662909fc70d4a0bb080691c7a3e351/lib/index.js#L91",
  },
  {
    title: "java addDependencies",
    code: `<div><span style="color: rgb(0, 0, 0);">function&nbsp;addDependencies(dir){</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(!fs.existsSync(dir)){</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;dependencies&nbsp;=&nbsp;fs.readdirSync(dir);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dependencies.forEach(function&nbsp;(dependency)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;java.classpath.push(baseDir&nbsp;+&nbsp;&quot;/&quot;&nbsp;+&nbsp;dependency);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>
      `,
    source:
      "https://github.com/LivePersonInc/kafka-java-bridge/blob/821fa1b020dabd37f1491d265b13b37f4fe16ae1/lib/util/javaInit.js#L23",
  },
  {
    title: "java NoStopWord example",
    code: `<div><span style="color: rgb(0, 0, 0);">NoStopWord&nbsp;(&nbsp;text&nbsp;)&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;opts&nbsp;=&nbsp;this.options,</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tokenizer&nbsp;=&nbsp;java.import(&apos;com.hankcs.hanlp.tokenizer.StandardTokenizer&apos;),</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StopWordDict&nbsp;=&nbsp;java.import(&apos;com.hankcs.hanlp.dictionary.stopword.CoreStopWordDictionary&apos;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;words&nbsp;=&nbsp;Tokenizer.segmentSync(&nbsp;text&nbsp;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StopWordDict.applySync(&nbsp;words&nbsp;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;&nbsp;JSON.parse(&nbsp;Gson.toJsonSync(words)&nbsp;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>
      `,
    source:
      "https://github.com/beyai/node-hanlp/blob/26a5fd0662662909fc70d4a0bb080691c7a3e351/lib/index.js#L137",
  },
  {
    title: "mysql get foreign key where clause",
    code: `<div><span style="color: rgb(0, 0, 0);">getForeignKeyWhereClause(parentTable,&nbsp;parentId,&nbsp;childTable)&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;whereValue&nbsp;=&nbsp;&quot;&quot;;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//get&nbsp;all&nbsp;foreign&nbsp;keys&nbsp;of&nbsp;child&nbsp;table</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;fks&nbsp;=&nbsp;this.metaDb.tables[childTable].foreignKeys;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;fk&nbsp;=&nbsp;dataHelp.findObjectInArrayByKey(</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;referenced_table_name&quot;,</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parentTable,</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fks</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;whereCol&nbsp;=&nbsp;fk[&quot;column_name&quot;];</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;colType&nbsp;=&nbsp;dataHelp.getColumnType(fk);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(colType&nbsp;===&nbsp;&quot;string&quot;)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;whereValue&nbsp;=&nbsp;mysql.escape(parentId);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(colType&nbsp;===&nbsp;&quot;int&quot;)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;whereValue&nbsp;=&nbsp;mysql.escape(parseInt(parentId));</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(colType&nbsp;===&nbsp;&quot;float&quot;)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;whereValue&nbsp;=&nbsp;mysql.escape(parseFloat(parentId));</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(colType&nbsp;===&nbsp;&quot;date&quot;)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;whereValue&nbsp;=&nbsp;mysql.escape(Date(parentId));</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.error(pks[i]);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;assert(false,&nbsp;&quot;Unhandled&nbsp;column&nbsp;type&nbsp;in&nbsp;foreign&nbsp;key&nbsp;handling&quot;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;whereCol&nbsp;+&nbsp;&quot;&nbsp;=&nbsp;&quot;&nbsp;+&nbsp;whereValue;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>
      `,
    source:
      "https://github.com/o1lab/xmysql/tree/68acb4db0f2024d7395a0d56ab256d9af032abd1/lib/xsql.js#L499",
  },
  {
    title: "mysql driver",
    code: `<div><span style="color: rgb(0, 0, 0);">const&nbsp;cancelObj&nbsp;=&nbsp;{};</span></div>

    <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;promise&nbsp;=&nbsp;connectionPromise.then(async&nbsp;conn&nbsp;=&gt;&nbsp;{</span></div>
    
    <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;[{&nbsp;connectionId&nbsp;}]&nbsp;=&nbsp;await&nbsp;conn.execute(&apos;select&nbsp;connection_id()&nbsp;as&nbsp;connectionId&apos;);</span></div>
    
    <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cancelObj.cancel&nbsp;=&nbsp;async&nbsp;()&nbsp;=&gt;&nbsp;{</span></div>
    
    <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cancelled&nbsp;=&nbsp;true;</span></div>
    
    <p><span style="color: rgb(0, 0, 0);">​</span></p>
    `,
    source:
      "https://github.com/cube-js/cube.js/blob/8d9eb688ba55d8821bebaf2a23fbb3addf93ab84/packages/cubejs-mysql-driver/driver/MySqlDriver.js#L60",
  },
  {
    title: "mysql get primary key where clause",
    code: `<div><span style="color: rgb(0, 0, 0);">&nbsp;whereValue&nbsp;=&nbsp;mysql.escape(pksValues[i]);</span></div>

    <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;}&nbsp;else&nbsp;if&nbsp;(type&nbsp;===&nbsp;&quot;int&quot;)&nbsp;{</span></div>
    
    <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;whereValue&nbsp;=&nbsp;parseInt(pksValues[i]);</span></div>
    
    <p><span style="color: rgb(0, 0, 0);">​</span></p>
    `,
    source:
      "https://github.com/o1lab/xmysql/tree/68acb4db0f2024d7395a0d56ab256d9af032abd1/lib/xsql.js#L453",
  },
  {
    title: "mysql driver constructor",
    code: `<div><span style="color: rgb(0, 0, 0);">this.pool&nbsp;=&nbsp;genericPool.createPool({</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;create:&nbsp;async&nbsp;()&nbsp;=&gt;&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;conn&nbsp;=&nbsp;mysql.createConnection(this.config);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const&nbsp;connect&nbsp;=&nbsp;promisify(conn.connect.bind(conn));</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(conn.on)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.on(&apos;error&apos;,&nbsp;()&nbsp;=&gt;&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.destroy();</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.execute&nbsp;=&nbsp;promisify(conn.query.bind(conn));</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;destroy:&nbsp;(connection)&nbsp;=&gt;&nbsp;promisify(connection.end.bind(connection))(),</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;validate:&nbsp;async&nbsp;(connection)&nbsp;=&gt;&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await&nbsp;connection.execute(&apos;SELECT&nbsp;1&apos;);</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(e)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;false;</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>
      `,
    source:
      "https://github.com/cube-js/cube.js/blob/8d9eb688ba55d8821bebaf2a23fbb3addf93ab84/packages/cubejs-mysql-driver/driver/MySqlDriver.js#L13",
  },
  {
    title: "mysql db.connect",
    code: `<div><span style="color: rgb(0, 0, 0);">db.connect((err)&nbsp;=&gt;&nbsp;{</span></div>

      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(err)&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;console.error(&apos;connection&nbsp;error&apos;,&nbsp;err.stack)</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(&apos;db&nbsp;connected&apos;)</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;terminus(http.createServer(app),&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger:&nbsp;console.log,</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signal:&nbsp;&apos;SIGINT&apos;,</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;healthChecks:&nbsp;{</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&apos;/healthcheck&apos;:&nbsp;onHealthCheck</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onSignal</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}).listen(3000)</span></div>
      
      <div><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</span></div>
      
      <p><span style="color: rgb(0, 0, 0);">​</span></p>
      `,
    source:
      "https://github.com/godaddy/terminus/blob/fde9bea072aaa8481add5c36a079a0e754020eb4/example/mysql/index.js#L47",
  },
  {
    title: "asynchronous callback function",
    code: `<pre>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">router.post(&quot;/roles/manage-permissions&quot;, auth(), </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">function</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(req, res, next){</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">    </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">async</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">.mapSeries(req.body, </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">function</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(role, callback) {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">      </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">let</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> roleObj = </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">new</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> Roles({id: role.role_id});</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">      roleObj.setPermissions(role.permission_ids, </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">function</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> (result) {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">        </span></span>
    <a href="https://www.tabnine.com/code/javascript/functions/async/callback"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 1px 2px; cursor: pointer; font-weight: bold; color: rgb(0, 0, 0);">callback</span></a>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">null</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">, result);</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">      });</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">    },</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">function</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(err, result){</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">      </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">if</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(err){</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">        console.error(err);</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">      }</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">else</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">        res.json(result);</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">      }</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">    });</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">  });</span></span>
  </pre>
  `,
    source:
      "https://github.com/service-bot/servicebot/blob/af0a72c3bdbd640b60dc31793039b7268c9c39bf/plugins/analytics/analytics.js#L241",
  },
  {
    title: "asynchronous callback function",
    code: `<pre>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">router.post(&quot;/roles/manage-permissions&quot;, auth(), </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">function</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(req, res, next){</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">    </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">async</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">.mapSeries(req.body, </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">function</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(role, callback) {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">      </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">let</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> roleObj = </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">new</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> Roles({id: role.role_id});</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">      roleObj.setPermissions(role.permission_ids, </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">function</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> (result) {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">        </span></span>
    <a href="https://www.tabnine.com/code/javascript/functions/async/callback"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 1px 2px; cursor: pointer; font-weight: bold; color: rgb(0, 0, 0);">callback</span></a>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">null</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">, result);</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">      });</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">    },</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">function</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(err, result){</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">      </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">if</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(err){</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">        console.error(err);</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">      }</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">else</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">        res.json(result);</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">      }</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">    });</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">  });</span></span>
  </pre>`,
    source:
      "https://github.com/service-bot/servicebot/blob/af0a72c3bdbd640b60dc31793039b7268c9c39bf/plugins/analytics/analytics.js#L241",
  },
  {
    title: "http get request",
    code: `<pre>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">function</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">get</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(options, noJSON = </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">false</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">) {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">return</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">new</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> Promise((resolve, reject) =&gt; {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">  https</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">   .</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">get</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(options, makeCallback(resolve, reject, noJSON))</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">   .</span></span>
    <a href="https://www.tabnine.com/code/javascript/functions/http/ClientRequest/on"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 1px 2px; cursor: pointer; font-weight: bold; color: rgb(0, 0, 0);">on</span></a>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(&apos;error&apos;, reject);</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;"> });</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">}</span></span>
  </pre>`,
    source:
      "https://github.com/parse-community/parse-server/blob/68a1b30275e8d4a353bd9ac4702795fb82ac01aa/src/Adapters/Auth/httpsRequest.js#L24",
  },
  {
    title: "http status code request",
    code: `<pre>
    <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; color: rgb(0, 0, 0);">http.</span>
    <a href="https://www.tabnine.com/code/javascript/functions/http/request"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 1px 2px; cursor: pointer; font-weight: bold; color: rgb(0, 0, 0);">request</span></a>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(options, (res) =&gt; {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> console.info(&apos;STATUS: &apos; + res.</span></span>
    <a href="https://www.tabnine.com/code/javascript/functions/http/IncomingMessage/statusCode"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 1px 2px; cursor: pointer; font-weight: bold; color: rgb(0, 0, 0);">statusCode</span></a>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">);</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> process.exitCode = (res.</span></span>
    <a href="https://www.tabnine.com/code/javascript/functions/http/IncomingMessage/statusCode"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 1px 2px; cursor: pointer; font-weight: bold; color: rgb(0, 0, 0);">statusCode</span></a>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> === 200) ? 0 : 1;</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;"> process.exit();</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">})</span></span>
  </pre>`,
    source:
      "https://github.com/BretFisher/node-docker-good-defaults/blob/85520919f56ce82ea0086751327590b44d758b8e/healthcheck.js#L10",
  },
  {
    title: "http createServer method",
    code: `<pre>
    <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; color: rgb(0, 0, 0);">http.</span>
    <a href="https://www.tabnine.com/code/javascript/functions/http/createServer"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 1px 2px; cursor: pointer; font-weight: bold; color: rgb(0, 0, 0);">createServer</span></a>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">((req, res) =&gt; { </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; font-weight: bold;">if</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> (req.</span></span>
    <a href="https://www.tabnine.com/code/javascript/functions/http/IncomingMessage/url"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 1px 2px; cursor: pointer; font-weight: bold; color: rgb(0, 0, 0);">url</span></a>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;"> === &apos;/&apos;) {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">  req.url = {mainLocale}</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;"> }</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;"> mount(req, res)</span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">}).</span></span>
    <a href="https://www.tabnine.com/code/javascript/functions/http/Server/listen"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 1px 2px; cursor: pointer; font-weight: bold; color: rgb(0, 0, 0);">listen</span></a>
    <span style="color: rgb(0, 0, 0);"><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px;">(port, () =&gt; {</span>
  <span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;"> </span><span style="box-sizing: border-box; border: 0px; margin: 0px; padding: 0px; display: block;">})</span></span>
  </pre>`,
    source:
      "https://github.com/nodejs/nodejs.org/blob/d24e6a85e55f7bd54980217b8216504cca6d4def/server.js#L108",
  },
];
