(() => {
  const projects = {
    hotzone: {
      label: '01 / 交易导购 · 上线验证',
      title: '重新定义一个手势，<br>让 IP 内容<br class="mobile-br">更容易被看见。',
      deck: 'IP 页的左右滑动原本用于切换 Tab。当 Tab 使用价值下降、IP 内容入口又不够顺手时，我参与设计了对这块手势热区的重新分配。',
      facts: [['时间','2026'],['角色','产品体验设计'],['范围','IP 页交互策略'],['状态','已上线 · 实验验证']],
      media: '<figure class="case-media"><img src="assets/ip-hotzone-cover.jpg" alt="IP 页滑动热区交互视觉" width="1920" height="1080"></figure>',
      sections: [
        ['问题','两条看似独立的数据，指向同一条路径。','<p>团队复盘发现，IP 页 Tab 左右滑动的使用持续走低，IP 内容曝光也不足。前者说明手势占据的入口价值下降，后者说明用户缺少顺手的内容探索方式。</p><p>问题因此不只是“多加一个入口”，而是：现有的高频手势，是否还能承担更有价值的动作？</p>'],
        ['判断','改变手势用途，必须先处理用户预期。','<p>方案 A 保留原有 Tab 滑动，在页面另加 IP 入口；方案 B 把左右滑动改为切换 IP 内容。方案 B 不增加页面空间，但会改变用户已经形成的手势心智。</p><div class="case-quote">复用一个熟悉的动作，也可能产生陌生的结果。</div><p>最终选择方案 B，并加入一次性动效提示：让用户在第一次触发时看懂切换结果，完成动作后提示消失，避免反复打扰。</p>'],
        ['验证','曝光上升是直接信号；交易变化需要谨慎解释。','<p>原作品集记录：60% 流量实验组、累计约一个月，IP 内容曝光 PV +4.27%，商详 PV +1.85%，订单数 +1.79%，GMV +0.91%。这些是案例公开呈现的结果。</p><div class="case-result"><div><strong>+4.27%</strong><span>IP 内容曝光 PV</span></div><div><strong>+1.79%</strong><span>订单数</span></div><div><strong>+0.91%</strong><span>GMV</span></div></div><p class="case-note">原作品集另列“全量后的预计收益”，那属于推算值，不计入已发生的实验结果。项目文中对实验流量比例另有“灰度 5%”表述，此处保留为待核对信息。</p>'],
        ['复盘','好设计也需要说明证据边界。','<p>这个项目最有价值的训练，是主动质疑“没有明显问题，但也没有创造多少价值”的旧方案。</p><p>下一轮验证值得补上两个问题：不同用户群是否同样接受手势变化？首次提示应该在进入页面时出现，还是在用户第一次滑动时出现？把这些边界讲清楚，设计判断才更经得起检验。</p>']
      ],
      next: ['pdp','下一篇：把两套商详整理成一套系统']
    },
    pdp: {
      label: '02 / 产品系统 · 交互稿已交付',
      title: '把两套商详，<br>整理成一套可生长的系统。',
      deck: '自营与小店商详长期并存。面对营销玩法、交易类型和内容状态的大量组合，这次交付从“画统一页面”转向“定义可复用的模块规则”。',
      facts: [['时间','2026'],['角色','产品体验设计'],['范围','商详信息结构与组件状态'],['状态','交互稿已交付']],
      media: '<div class="case-media matrix-case"><div class="work-visual matrix-visual" role="img" aria-label="商详组件状态矩阵的概念示意"><div class="matrix-top"><span>PRODUCT DETAIL / SYSTEM</span><span>01 — 09</span></div><div class="matrix-board" aria-hidden="true"><div class="matrix-column"><i></i><i></i><i></i><i></i></div><div class="matrix-column"><i></i><i></i><i></i><i></i></div><div class="matrix-column"><i></i><i></i><i></i><i></i></div><div class="matrix-column"><i></i><i></i><i></i><i></i></div></div><div class="matrix-bottom">模块 / 条件 / 状态 / 降级</div></div></div>',
      sections: [
        ['问题','同一商品决策，在不同业务模式里像两种产品。','<p>自营与小店商详分别生长出自己的信息结构、模块和交互规则。用户在两个场景之间切换时，体验不连续；新功能也常要重复设计、重复开发。</p><p>整合不是把两套页面的功能堆到一起。真正的问题是：哪些规则应该共享，哪些差异必须保留？</p>'],
        ['系统','用状态矩阵代替页面级穷举。','<p>价格条、购买栏和营销利益点会受到活动阶段、券状态、库存状态与现货或预售类型的影响。页面级设计稿很难覆盖每种组合，也难以在玩法新增时维护。</p><div class="case-quote">交付一张页面，回答的是现在长什么样；交付一组规则，回答的是以后怎么扩展。</div><p>方案把商详拆成按条件装配的模块，为复杂组件定义状态矩阵和优先级；内容不足时，为评论与晒图区定义从图墙到文字补位、隐藏或引导发布的降级路径。</p>'],
        ['取舍','保留成熟的交易逻辑，重点改结构。','<p>规格、晒图等模块优先复用已有验证过的逻辑；支付和特殊提示保持线上规则。设计精力集中在结构统一、状态完整与跨场景一致性上，避免为了“统一视觉”引入交易风险。</p>'],
        ['结果','当前证据是设计交付，不是上线收益。','<p>原作品集将这个专项标注为“交互稿已交付”。目前可以证明的是：整合方案与组件规则已经完成；尚不能把未来节省的开发时间、转化改善写成已实现成果。</p><p>下一步应追踪组件被前端采纳的覆盖率、新玩法接入所需时间，以及因状态遗漏产生的验收问题数。设计矩阵只有进入代码和维护机制，才真正成为系统。</p>']
      ],
      next: ['aiqa','下一篇：把验收变成持续反馈']
    },
    aiqa: {
      label: '03 / AI 工作流 · 团队实践',
      title: '让验收从最后一道关，<br>变成持续反馈。',
      deck: '设计稿和实现稿的差异，过去依靠人工在提测阶段集中发现。我把比对规则、AI 辅助和开发协作组织成一个更早运行的验收流程。',
      facts: [['时间','2026'],['角色','工作流设计与实践'],['范围','设计交付 / 开发验收'],['状态','已落地 · 持续迭代']],
      media: '<div class="case-media process-case"><div class="work-visual process-visual" role="img" aria-label="从设计标准到差异比对与代码定位的验收流程示意"><div class="process-top">DESIGN × ENGINEERING × AI</div><div class="process-flow" aria-hidden="true"><span>设计标准</span><i></i><span>差异比对</span><i></i><span>代码定位</span></div><div class="process-caption">把交付质量，写进协作流程。</div></div></div>',
      sections: [
        ['问题','发现偏差越晚，修复成本越高。','<p>人工逐页走查耗时；业务排期紧时，验收容易退化为抽查。若差异直到提测后才集中出现，设计、开发之间就要经历截图、标注、沟通与返工的多轮往返。</p>'],
        ['机制','先定义什么算问题，再让 AI 找问题。','<p>流程从标准化交付开始：尺寸、色值、间距和状态枚举形成共同基准。AI 辅助比对设计稿与实现稿，按严重程度输出差异，开发侧收到的是可定位到组件或代码位置的事项。</p><p>前两周人工复核差异清单，持续修正规则中的误报。比模型能力更关键的是信任：清单只有足够准确，团队才会愿意在日常协作中使用。</p>'],
        ['协作','把第一轮验收前移到联调阶段。','<p>流程不再等到提测才启动。能快速修复的偏差在开发过程中直接闭环，设计走查将注意力从“找不同”转向判断哪些不同会影响用户理解与交易体验。</p>'],
        ['结果','效率改善是起点，质量仍需追踪。','<div class="case-result"><div><strong>约 30%</strong><span>Review 与验收效率提升<br>据原作品集记录</span></div></div><p>原作品集称该流程已进入团队日常使用。下一步值得持续记录：误报率、修复时间、上线后漏检问题，以及不同项目组的采纳情况。这些指标会比单次提效数字更能说明工作流的价值。</p>']
      ],
      next: ['hotzone','下一篇：重新定义 IP 页手势']
    }
  };

  const id = new URLSearchParams(location.search).get('id');
  const project = projects[id];
  const root = document.getElementById('case-root');
  if (!project) {
    root.innerHTML = '<div class="wrap case-hero"><a class="case-back" href="index.html#work">← 返回精选项目</a><h1>没有找到这个案例。</h1></div>';
    return;
  }
  document.title = `${project.title.replace(/<br[^>]*>/g, '')} — 吴彦霖`;
  root.innerHTML = `
    <div class="wrap case-hero"><a class="case-back" href="index.html#work">← 返回精选项目</a><div class="case-kicker">${project.label}</div><h1>${project.title}</h1><p class="case-deck">${project.deck}</p><div class="case-facts">${project.facts.map(([label,value]) => `<div class="case-fact"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div></div>
    ${project.media}
    <div class="wrap case-body"><nav class="case-toc" aria-label="案例目录"><div class="section-index">IN THIS CASE</div>${project.sections.map((section,index) => `<a href="#section-${index+1}">${section[0]}</a>`).join('')}</nav><div class="case-prose">${project.sections.map((section,index) => `<section id="section-${index+1}"><div class="section-index">0${index+1} / ${section[0]}</div><h2>${section[1]}</h2>${section[2]}</section>`).join('')}</div></div>
    <div class="case-next"><div class="wrap"><span>KEEP EXPLORING</span><a href="case.html?id=${project.next[0]}">${project.next[1]} ↗</a></div></div>
    <footer class="footer"><div class="wrap"><p class="footer-kicker">LET'S MAKE COMPLEX THINGS CLEAR.</p><a class="footer-mail" href="mailto:ylwtj510@gmail.com">一起聊聊新的问题 <span aria-hidden="true">↗</span></a><div class="footer-bottom"><span>© 2026 YANLIN WU</span><span>精选作品集概念版 · 基于原作品集资料整理</span><a href="index.html">返回首页 ↑</a></div></div></footer>`;
})();
