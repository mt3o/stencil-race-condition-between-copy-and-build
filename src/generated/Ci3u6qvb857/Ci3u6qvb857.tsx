
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-i3u6qvb857',
  shadow: true,
})
export class Ci3u6qvb857 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  