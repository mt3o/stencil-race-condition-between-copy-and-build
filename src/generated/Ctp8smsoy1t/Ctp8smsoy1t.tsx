
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-tp8smsoy1t',
  shadow: true,
})
export class Ctp8smsoy1t {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  