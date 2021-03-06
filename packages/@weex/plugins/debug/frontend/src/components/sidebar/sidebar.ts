/* Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import { Logger } from '../../util/log'
import { Link, LINKTYPE } from './link'

import './sidebar.scss'

@Component({
  template: require('./sidebar.html'),
  components: {}
})
export class SidebarComponent extends Vue {
  links: Link[] = []
  linkType = {
    dividing: LINKTYPE.DEVIDING,
    link: LINKTYPE.LINK
  }
  @Prop({ type: String })
  channelId: string

  protected logger: Logger

  mounted () {
    this.initLinks()
  }

  initLinks (type?: string) {
    this.links = [
      new Link(this.$t('sideBar.weex.title'), `/client/weex/${this.channelId}?type=${type}`, 'icon-debug'),
      new Link('', '', '', LINKTYPE.DEVIDING),
      new Link(this.$t('sideBar.analyze.title'), `/client/analyze/${this.channelId}?type=${type}`, 'icon-ceshi')
      // new Link('页面评价', `/client/eval/${this.channelId}?type=${type}`, 'icon-tongjibaobiao'),
      // new Link('', '', '', LINKTYPE.DEVIDING),
      // new Link('资源分析', `/client/source/${this.channelId}?type=${type}`, 'icon-number'),
      // new Link('健康检查', `/client/health/${this.channelId}?type=${type}`, 'icon-jiankang'),
      // new Link('', '', '', LINKTYPE.DEVIDING),
      // new Link('开发设置', `/client/setting/${this.channelId}?type=${type}`, 'icon-shezhi')
    ]
  }
}
