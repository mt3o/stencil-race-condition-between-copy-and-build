
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-nl8zpsalid',
  shadow: true,
})
export class Cnl8zpsalid {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  